'use client';
import React, { useEffect, useRef, useState } from 'react';

const ContentToggle = ({ children }: { children: React.ReactNode }) => {
    const [showContent, setShowContent] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleShowContent = () => {
        setShowContent(!showContent);
    };

    useEffect(() => {
        if (showContent && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [showContent]);

    return (
        <>
            <div className={`w-screen h-px ${showContent ? 'animate-expand' : 'animate-shrink'} bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0`}></div>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => toggleShowContent()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ml-2 transition-transform duration-500 ${showContent ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#666666"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <h1
                    className={`select-none flickering-text z-10 text-4xl text-transparent bg-white text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ${showContent ? 'fade-out' : ''}`}
                >
                    JUNITY
                </h1>
            </div>
            <div
                ref={contentRef}
                style={{
                    overflow: 'hidden',
                    transition: 'height 1s ease',
                    height: `${contentHeight}px`,
                    maxWidth: '100%',
                }}
            >
                {children}
            </div>
            <div
                className={`w-screen h-px ${showContent ? 'animate-expand' : 'animate-shrink'} bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0`}
            ></div>
        </>
    );
};

export default ContentToggle;
