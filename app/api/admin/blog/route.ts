import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, excerpt, content, author } = body;

        // Basic validation
        if (!title || !excerpt || !content || !author) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Generate a URL-friendly slug from the title
        const slug = title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

        // Extract base64 images and save them to /public/blog-images
        let processedContent = content;
        const imgRegex = /<img[^>]+src="data:image\/([^;]+);base64,([^"]+)"[^>]*>/g;
        let match;

        const imagesDir = path.join(process.cwd(), 'public', 'blog-images');
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        while ((match = imgRegex.exec(content)) !== null) {
            const ext = match[1];
            const base64Data = match[2];
            const fileName = `${slug}-${Date.now()}.${ext}`;
            const filePath = path.join(imagesDir, fileName);

            fs.writeFileSync(filePath, base64Data, 'base64');
            const publicUrl = `/blog-images/${fileName}`;

            // Replace the base64 src with the new public URL string
            const fullMatch = match[0];
            const newImgTag = fullMatch.replace(`data:image/${ext};base64,${base64Data}`, publicUrl);
            processedContent = processedContent.replace(fullMatch, newImgTag);
        }

        // Get current date in YYYY-MM-DD format
        const date = new Date().toISOString().split('T')[0];

        const newPost = {
            slug,
            title,
            date,
            excerpt,
            content: processedContent,
            author,
        };

        // Read the existing posts
        const dataDir = path.join(process.cwd(), 'data');
        const postsFile = path.join(dataDir, 'posts.json');

        let posts = [];
        if (fs.existsSync(postsFile)) {
            const fileContent = fs.readFileSync(postsFile, 'utf-8');
            posts = JSON.parse(fileContent);
        } else {
            // Ensure the data directory exists
            if (!fs.existsSync(dataDir)) {
                fs.mkdirSync(dataDir);
            }
        }

        // Append the new post
        posts.push(newPost);

        // Write the updated posts array back to the file
        fs.writeFileSync(postsFile, JSON.stringify(posts, null, 4));

        return NextResponse.json({ success: true, post: newPost }, { status: 201 });
    } catch (error) {
        console.error('Error saving blog post:', error);
        return NextResponse.json(
            { error: 'Failed to save blog post' },
            { status: 500 }
        );
    }
}
