'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AREA_PAGES } from '@/lib/site-routes';

export function areaHref(name: string): string | null {
    const area = AREA_PAGES.find((a) => a.name === name);
    return area ? `/areas/${area.slug}` : null;
}

/**
 * An area name that links to its area page once one exists, and stays plain
 * text otherwise. Never links a page to itself.
 */
export default function AreaLink({
    name,
    className = '',
    linkClassName = 'underline decoration-dotted underline-offset-4 hover:text-blue-600',
    children,
}: {
    name: string;
    className?: string;
    linkClassName?: string;
    children?: React.ReactNode;
}) {
    const pathname = usePathname();
    const href = areaHref(name);
    const label = children ?? name;

    if (!href || pathname === href) return <span className={className}>{label}</span>;
    return (
        <Link href={href} className={`${className} ${linkClassName}`.trim()}>
            {label}
        </Link>
    );
}

/**
 * Always-rendered links to every area page, for sections whose area chips are
 * interactive buttons (a button can't also be a link, and links revealed only
 * after a click never reach search engines).
 */
export function AreaPageLinks({ className = 'text-blue-600 hover:text-blue-700' }: { className?: string }) {
    const pathname = usePathname();
    const pages = AREA_PAGES.filter((area) => pathname !== `/areas/${area.slug}`);
    if (!pages.length) return null;
    return (
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm font-bold">
            {pages.map((area) => (
                <Link key={area.slug} href={`/areas/${area.slug}`} className={`inline-flex items-center gap-1.5 ${className}`}>
                    Car body repairs in {area.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            ))}
        </p>
    );
}
