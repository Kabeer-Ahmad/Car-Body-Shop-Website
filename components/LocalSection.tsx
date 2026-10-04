/**
 * A page-specific local section for area pages. Styling reuses the site's
 * existing pieces: the FAQ eyebrow pill, the service-page guide table and
 * the check-mark list from the service "why choose" sections.
 */
export interface LocalSectionContent {
    eyebrow: string;
    title: string;
    intro: React.ReactNode;
    table?: { caption: string; headers: string[]; rows: React.ReactNode[][] };
    points?: { title: string; text: React.ReactNode }[];
    outro?: React.ReactNode;
}

export default function LocalSection({ section, tone = 'white' }: { section: LocalSectionContent; tone?: 'white' | 'gray' }) {
    const pointsList = section.points ? (
        <ul className="space-y-4 mb-6">
            {section.points.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-bold text-gray-900">{point.title}.</span> {point.text}
                    </p>
                </li>
            ))}
        </ul>
    ) : null;

    return (
        <section className={`py-20 ${tone === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                            {section.eyebrow}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">{section.title}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{section.intro}</p>

                        {section.table && pointsList}

                        {section.outro && <p className="text-gray-500 leading-relaxed">{section.outro}</p>}
                    </div>

                    {!section.table && pointsList}

                    {section.table && (
                        <div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{section.table.caption}</h3>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 font-bold uppercase text-xs tracking-wide">
                                        <tr>
                                            {section.table.headers.map((h) => (
                                                <th key={h} className="px-4 py-3 text-left">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {section.table.rows.map((row, i) => (
                                            <tr key={i} className="bg-white hover:bg-gray-50 transition-colors">
                                                {row.map((cell, j) => (
                                                    <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-medium text-gray-800' : j === row.length - 1 ? 'text-blue-600 font-bold whitespace-nowrap' : 'text-gray-500'}`}>
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
