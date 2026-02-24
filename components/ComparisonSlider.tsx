'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ComparisonSliderProps {
    before: string;
    after: string;
    /** Optional description for SEO/accessibility (e.g. "Fender dent repair & respray") */
    description?: string;
}

export default function ComparisonSlider({ before, after, description }: ComparisonSliderProps) {
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleResize = useCallback((clientX: number) => {
        if (containerRef.current) {
            const { left, width } = containerRef.current.getBoundingClientRect();
            const newPosition = ((clientX - left) / width) * 100;
            setPosition(Math.min(100, Math.max(0, newPosition)));
        }
    }, []);

    const handleMouseDown = () => setIsResizing(true);
    const handleTouchStart = () => setIsResizing(true);

    useEffect(() => {
        const handleMouseUp = () => setIsResizing(false);
        const handleMouseMove = (e: MouseEvent) => {
            if (isResizing) handleResize(e.clientX);
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (isResizing) handleResize(e.touches[0].clientX);
        };
        const handleTouchEnd = () => setIsResizing(false);

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isResizing, handleResize]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl cursor-ew-resize select-none group"
        >
            {/* After Image (Background) */}
            <Image
                src={after}
                alt={description ? `After: ${description}` : "After repair"}
                fill
                className="object-cover"
                draggable={false}
                priority
                unoptimized // Using unoptimized in case these are local dev images without optimization setup
            />
            <div className="absolute top-2 right-2 bg-green-600/90 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10 pointer-events-none">
                AFTER
            </div>

            {/* Before Image (Foreground - clipped) */}
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <Image
                    src={before}
                    alt={description ? `Before: ${description}` : "Before repair"}
                    fill
                    className="object-cover"
                    draggable={false}
                    priority
                    unoptimized
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10 pointer-events-none">
                    BEFORE
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${position}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
