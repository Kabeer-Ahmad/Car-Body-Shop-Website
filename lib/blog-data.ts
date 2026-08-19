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
import { getGitHubPostsRawUrl, githubReadText, isGitHubStorageEnabled } from '@/lib/github-storage';

function readLocalPosts(): BlogPost[] {
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
}

async function readRemotePosts(): Promise<BlogPost[] | null> {
    // Private repos cannot be read via raw.githubusercontent.com — use the API when configured.
    if (isGitHubStorageEnabled()) {
        try {
            const remote = await githubReadText('data/posts.json');
            if (remote?.content) {
                return JSON.parse(remote.content) as BlogPost[];
            }
        } catch (e) {
            console.error('Error fetching blog posts from GitHub API:', e);
        }
    }

    const url = getGitHubPostsRawUrl();
    if (!url) return null;

    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return null;
        return (await res.json()) as BlogPost[];
    } catch (e) {
        console.error('Error fetching remote blog posts:', e);
        return null;
    }
}

// Sync read for build-time/static generation fallback.
export const getPosts = (): BlogPost[] => readLocalPosts();

export async function getPostsAsync(): Promise<BlogPost[]> {
    const remote = await readRemotePosts();
    if (remote && remote.length > 0) return remote;
    return readLocalPosts();
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return getPosts().find(post => post.slug === slug);
}

export async function getPostBySlugAsync(slug: string): Promise<BlogPost | undefined> {
    const posts = await getPostsAsync();
    return posts.find(post => post.slug === slug);
}
