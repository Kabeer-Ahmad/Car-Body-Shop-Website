/**
 * Car Body Shop – Logo component
 * Uses the official PNG logo. On dark backgrounds (light=true),
 * a white pill container is applied so the white-bg PNG reads cleanly.
 *
 * Props
 *   light     – true → wrap in white rounded container (for dark nav/footer)
 *   height    – rendered height in px
 *   className – additional classes on the outer element
 */
import Image from 'next/image';

interface LogoProps {
    light?: boolean;
    className?: string;
    height?: number;
}

export default function Logo({ light = false, className = '', height = 52 }: LogoProps) {
    // The PNG is square (1080×1080). Maintain aspect ratio.
    const width = height;

    if (light) {
        // On dark backgrounds: render inside a white rounded pill so the
        // white-background PNG sits naturally without an odd square border.
        return (
            <span
                className={`inline-flex items-center justify-center rounded-xl bg-white px-1.5 py-0.5 ${className}`}
                style={{ lineHeight: 0 }}
            >
                <Image
                    src="/logo.png"
                    alt="Car Body Shop"
                    width={width}
                    height={height}
                    priority
                    style={{ width: 'auto', height: `${height}px` }}
                />
            </span>
        );
    }

    return (
        <span className={`inline-flex items-center ${className}`} style={{ lineHeight: 0 }}>
            <Image
                src="/logo.png"
                alt="Car Body Shop"
                width={width}
                height={height}
                priority
                style={{ width: 'auto', height: `${height}px` }}
            />
        </span>
    );
}
