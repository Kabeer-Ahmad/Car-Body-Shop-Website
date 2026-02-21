export interface BlogPost {
    slug: string;
    title: string;
    date: string; // ISO format YYYY-MM-DD
    excerpt: string;
    content: string; // HTML string or plain text with basic formatting
    author: string;
}

import fs from 'fs';
import path from 'path';

// Read posts from disk dynamically (runs on the server during SSG/SSR)
export const getPosts = (): BlogPost[] => {
    try {
        const dataPath = path.join(process.cwd(), 'data', 'posts.json');
        if (fs.existsSync(dataPath)) {
            const rawData = fs.readFileSync(dataPath, 'utf-8');
            return JSON.parse(rawData) as BlogPost[];
        }
    } catch (e) {
        console.error("Error reading blog posts:", e);
    }
    return [];
};

export function getPostBySlug(slug: string): BlogPost | undefined {
    return getPosts().find(post => post.slug === slug);
}

