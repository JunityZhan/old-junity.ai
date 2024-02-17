'use client';
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const toggleShowContent = () => {
    setShowContent(!showContent);
  }

  const contentRef = useRef<HTMLDivElement>(null);

  // 使用useEffect来监听showContent的变化，并动态设置contentHeight
  useEffect(() => {
    if (showContent && contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    } else {
      setContentHeight(0);
    }
  }, [showContent]);
  const dynamicStylesForTopElements = {
    transition: 'all 0.5s ease', // 平滑过渡所有变化
    transform: `translateY(${showContent ? `-${contentHeight / 2}px` : '0px'})`, // 上部元素向上移动
  };

  const dynamicStylesForBottomElements = {
    transition: 'all 0.5s ease', // 平滑过渡所有变化
    transform: `translateY(${showContent ? `${contentHeight / 2}px` : '0px'})`, // 底部元素向下移动
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav style={dynamicStylesForTopElements} className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className={`w-screen h-px ${showContent ? 'animate-expand' : 'animate-shrink'} bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0`} style={dynamicStylesForTopElements}></div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1
        className={`select-none flickering-text z-10 text-4xl text-transparent bg-white cursor-pointer text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ${showContent ? 'fade-out' : ''}`}
        onClick={() => toggleShowContent()}
      >
        JUNITY
      </h1>
      <div
        ref={contentRef}
        style={{
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
          maxHeight: showContent ? '100vh' : 0,
        }}
      >
        {/* 新内容 */}
        <div className="text-color-default">
          你发现了隐藏字体<br />你发现了隐藏字体<br />你发现了隐藏字体
          你发现了隐藏字体<br />你发现了隐藏字体
          你发现了隐藏字体<br />你发现了隐藏字体
          你发现了隐藏字体<br />你发现了隐藏字体
          再次点击收回
        </div>
      </div>

      <div
        className={`w-screen h-px ${showContent ? 'animate-expand' : 'animate-shrink'} bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0`}
        style={dynamicStylesForBottomElements}
      ></div>
      <div style={dynamicStylesForBottomElements} className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I&apos;m building{" "}
          <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            unkey.dev
          </Link> to solve API authentication and authorization for developers.
        </h2>
      </div>
    </div>
  );

}