const fs = require('fs');
const path = require('path');

const postsData = JSON.parse(fs.readFileSync('./data/posts.json', 'utf8'));

// The 8 static service routes
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

// Helper to convert h3 question to detail/summary for faqs
function parseContentWithFAQs(html) {
    // A simple regex to find the FAQ section and convert h3 + p to details
    // We will look for "Frequently Asked Questions" h2
    let updatedHtml = html;
    
    // We find the H2 for FAQs
    const faqMatch = updatedHtml.match(/<h2>Frequently Asked Questions.*?<\/h2>/i);
    if(faqMatch) {
         const faqIndex = updatedHtml.indexOf(faqMatch[0]);
         const beforeFaq = updatedHtml.substring(0, faqIndex + faqMatch[0].length);
         let afterFaq = updatedHtml.substring(faqIndex + faqMatch[0].length);
         
         // In afterFaq, we need to convert <h3>...</h3><p>...</p> into <details><summary><h3>...</h3></summary><div class="faq-content"><p>...</p></div></details>
         // Since afterFaq might contain another H2, we only replace until the next H2 or end of string.
         
         let finalFaqSection = afterFaq.replace(/(<h3>.*?<\/h3>)(.*?)(?=(<h3>|<h2>|$))/g, (match, h3, content) => {
             return `<details class="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-4 cursor-pointer transition-all hover:border-blue-200">
                        <summary class="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                            ${h3.replace(/<\/?h3>/g, '')}
                            <svg class="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div class="mt-4 text-gray-600 prose-p:mb-2">${content}</div>
                    </details>`;
         });
         
         updatedHtml = beforeFaq + finalFaqSection;
    }
    
    return updatedHtml;
}

serviceUrls.forEach(slug => {
    const post = postsData.find(p => p.slug === slug);
    if(!post) return;
    
    let contentHtml = parseContentWithFAQs(post.content);
    
    const pagePath = path.join(__dirname, 'app', 'services', slug, 'page.tsx');
    let fileContent = fs.readFileSync(pagePath, 'utf8');

    // 1. Remove the static paragraph and buttons from the hero section
    // Finding the exact hero text
    const heroContentRegex = /<p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto mb-10 text-balance leading-relaxed">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
    
    fileContent = fileContent.replace(heroContentRegex, `</div>
            </section>`);

    // 2. Replace the article content
    const articleRegex = /<article className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">[\s\S]*?{?\/\* Bottom CTA \*\/}?/;
    
    const newArticle = `<article className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-700
                               prose-headings:font-extrabold prose-headings:text-gray-900 
                               prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:pb-4 prose-h2:border-gray-100
                               prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-blue-900 prose-h3:mt-10 prose-h3:mb-4
                               prose-p:leading-relaxed prose-p:mb-6
                               prose-ul:my-6 prose-li:my-2 prose-li:text-gray-700
                               prose-a:text-blue-600 hover:prose-a:underline font-bold
                               prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-10"
                     dangerouslySetInnerHTML={{ __html: \`${contentHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} 
                />

                {/* Bottom CTA */}`;

    fileContent = fileContent.replace(articleRegex, newArticle);
    
    fs.writeFileSync(pagePath, fileContent, 'utf8');
    console.log('Updated', slug);
});

