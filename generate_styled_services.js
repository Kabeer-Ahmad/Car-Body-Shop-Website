const fs = require('fs');
const path = require('path');
const postsData = JSON.parse(fs.readFileSync('./data/posts.json', 'utf8'));
const serviceUrls = [
    'full-car-respray-rochdale',
    'trade-motor-dealer-bodyshop-services',
    'accident-collision-repair-rochdale',
    'bumper-repair-rochdale',
    'dent-removal-rochdale',
    'car-scratch-repair-rochdale',
    'minor-accident-repair-rochdale',
    'lease-return-repairs-rochdale'
];

function cleanHtml(html) {
    if(!html) return '';
    return html.replace(/style="[^"]*"/g, '').replace(/<span\s*>(.*?)<\/span>/g, '$1').replace(/<p><\/p>/g, '').trim();
}

function parseHTML(html) {
    let intro = null; let services = null; let blocks = []; let locations = null; let faqs = null; let cta = null;
    const h2Regex = /<h2.*?>(.*?)<\/h2>/gi;
    let matches = []; let match;
    while ((match = h2Regex.exec(html)) !== null) {
        matches.push({ title: match[1], index: match.index, length: match[0].length });
    }
    if (matches.length === 0) return { intro, services, blocks, locations, faqs, cta };

    let firstH2 = matches[0];
    let introEnd = matches.length > 1 ? matches[1].index : html.length;
    let introContent = html.substring(firstH2.index + firstH2.length, introEnd);
    intro = { title: firstH2.title, content: cleanHtml(introContent) };
    
    for (let i = 1; i < matches.length; i++) {
        let m = matches[i];
        let title = m.title.replace(/<[^>]+>/g, '').trim();
        let nextIndex = i + 1 < matches.length ? matches[i+1].index : html.length;
        let content = html.substring(m.index + m.length, nextIndex).trim();
        let lowerTitle = title.toLowerCase();
        
        const parseH3s = (contentHtml) => {
            const h3Regex = /<h3.*?>(.*?)<\/h3>/gi;
            let m; let h3s = [];
            while ((m = h3Regex.exec(contentHtml)) !== null) { h3s.push({ title: m[1], index: m.index, length: m[0].length }); }
            if(h3s.length === 0) return { intro: cleanHtml(contentHtml), items: [] };
            let listIntro = contentHtml.substring(0, h3s[0].index);
            let items = [];
            for (let j = 0; j < h3s.length; j++) {
                let h = h3s[j];
                let nextH = j + 1 < h3s.length ? h3s[j+1].index : contentHtml.length;
                let c = contentHtml.substring(h.index + h.length, nextH);
                items.push({ title: h.title.replace(/<[^>]+>/g, '').trim(), content: cleanHtml(c) });
            }
            return { intro: cleanHtml(listIntro), items };
        };
        
        if (lowerTitle.includes('our services')) {
             let parsed = parseH3s(content);
             services = { description: parsed.intro, items: parsed.items };
        } else if (lowerTitle.includes('locations we serve')) {
             let parsed = parseH3s(content);
             locations = { items: parsed.items };
        } else if (lowerTitle.includes('frequently asked questions')) {
             let parsed = parseH3s(content);
             faqs = { title, items: parsed.items };
        } else if (lowerTitle.includes('book your') || lowerTitle.includes('get a free quote') || lowerTitle.includes('set up your trade') || lowerTitle.includes('get your accident')) {
             cta = { title, content: cleanHtml(content) };
        } else {
             blocks.push({ title, content: cleanHtml(content) });
        }
    }
    return { intro, services, blocks, locations, faqs, cta };
}

serviceUrls.forEach(slug => {
    const post = postsData.find(p => p.slug === slug);
    if(!post) return;
    
    let pagePath = path.join(__dirname, 'app', 'services', slug, 'page.tsx');
    let titleFromPost = post.title;
    
    let parsedData = parseHTML(post.content);
    
    function escapeContent(str) {
        if(!str) return '';
        return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    }

    let pageCode = `import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: \`${titleFromPost.replace(/`/g, '\\`')} | \${BUSINESS_DETAILS.name}\`,
    description: \`${post.excerpt.replace(/`/g, '\\`')}\`,
    openGraph: {
        title: \`${titleFromPost.replace(/`/g, '\\`')}\`,
        description: \`${post.excerpt.replace(/`/g, '\\`')}\`,
        url: \`https://carbodyshop.org/services/${slug}\`,
        type: 'website',
    },
};

export default function ServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-gray-900/80 z-10"></div>
                    <Image
                        src="/hero-bg.jpg"
                        alt="${post.title}"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        ${post.title}
                    </h1>
                </div>
            </section>

            {/* Introduction Section */}
            ${parsedData.intro ? `<section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">${escapeContent(parsedData.intro.title)}</h2>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-600 leading-relaxed font-medium prose-p:mb-6" dangerouslySetInnerHTML={{ __html: \`${escapeContent(parsedData.intro.content)}\` }} />
                </div>
            </section>` : ''}

            {/* General Blocks */}
            ${parsedData.blocks.map((block, index) => `
            <section className="py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">${escapeContent(block.title)}</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: \`${escapeContent(block.content)}\` }} />
                </div>
            </section>
            `).join('')}

            {/* Related Services Grid */}
            ${parsedData.services ? `<section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                        <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: \`${escapeContent(parsedData.services.description)}\` }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${parsedData.services.items.map(item => `
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">${escapeContent(item.title)}</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: \`${escapeContent(item.content)}\` }} />
                        </div>
                        `).join('')}
                    </div>
                </div>
            </section>` : ''}

            {/* Locations Grid */}
            ${parsedData.locations ? `<section className="py-20 bg-blue-600 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Locations We Serve</h2>
                        <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${parsedData.locations.items.map(loc => `
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">${escapeContent(loc.title)}</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: \`${escapeContent(loc.content)}\` }} />
                        </div>
                        `).join('')}
                    </div>
                </div>
            </section>` : ''}

            {/* FAQs */}
            ${parsedData.faqs ? `<section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">${escapeContent(parsedData.faqs.title)}</h2>
                    <div className="space-y-4">
                        ${parsedData.faqs.items.map(faq => `
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                ${escapeContent(faq.title)}
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: \`${escapeContent(faq.content)}\` }} />
                        </details>
                        `).join('')}
                    </div>
                </div>
            </section>` : ''}

            {/* Bottom CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 text-center border border-gray-100 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -m-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">${parsedData.cta ? escapeContent(parsedData.cta.title) : 'Ready to restore your vehicle?'}</h2>
                        <div className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-light" dangerouslySetInnerHTML={{ __html: \`${parsedData.cta ? escapeContent(parsedData.cta.content) : "Don't let damage ruin the look and value of your car. Send us photos on WhatsApp for a fast, free, no-obligation quote."}\` }} />
                        
                        <div className="flex justify-center relative z-10">
                            <a
                                href={\`https://wa.me/\${BUSINESS_DETAILS.phone.replace(/^0/, '44').replace(/\\s/g, '')}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20a%20repair.\`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl md:text-2xl transition-transform hover:-translate-y-1 shadow-xl flex items-center gap-3"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center">
                    <p className="mb-6">&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/blog" className="hover:text-white transition-colors">Advice & Tips</Link>
                        <a href={\`tel:\${BUSINESS_DETAILS.phone}\`} className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
`;

    fs.writeFileSync(pagePath, pageCode, 'utf8');
    console.log('Restyled page for', slug);
});

