import Link from "next/link";
import React from "react";
import ContentToggle from "./components/ContentToggle";
import CV from "./components/cv";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={2000}
      />
      <nav className="my-16 animate-fade-in">
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

      <ContentToggle>
        <CV />
      </ContentToggle>
      <div  className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Built by Junity with Love.
        </h2>
      </div>
    </div>
  );

}