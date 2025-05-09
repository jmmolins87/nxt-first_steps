


import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page SEO Title',
    description: 'About Page SEO Description',
    keywords: ['SEO', 'Keywords', 'About', 'Page', 'Next.js', 'TypeScript'],
};


export default function AboutPage() {
    
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}