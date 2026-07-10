/**
 * Car Body Shop – Logo component
 * Uses the official PNG logo from /public/logo.png.
 *
 * Props
 *   light     – true → wraps in a white rounded container for dark backgrounds (footer/hero)
 *   height    – rendered height in px (logo is square, so width = height)
 *   className – additional classes applied to the outer wrapper
 */
import Image from 'next/image';

interface LogoProps {
    light?: boolean;
    className?: string;
    height?: number;
}

export default function Logo({ light = false, className = '', height = 50 }: LogoProps) {
    const img = (
        <Image
            src="/logo.png"
            alt="Car Body Shop"
            width={height}
            height={height}
            priority
            style={{ width: 'auto', height: `${height}px`, display: 'block' }}
        />
    );

    if (light) {
        // On dark backgrounds: white rounded pill so the PNG reads cleanly.
        return (
            <span
                className={`rounded-xl bg-white px-1.5 py-0.5 ${className}`.trim()}
                style={{ lineHeight: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
                {img}
            </span>
        );
    }

    return (
        <span
            className={className}
            style={{ lineHeight: 0, display: 'inline-flex', alignItems: 'center' }}
        >
            {img}
        </span>
    );
}
