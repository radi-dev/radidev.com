"use client";
import React, { useEffect, useRef, useState } from "react";
import RadidevLogo from "./radidev-logo";
import Link from "next/link";



export default function Header() {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return <header ref={ref}><div id="header" className={`fixed top-0 pt-5 left-[10vw] px-2  w-[80vw] flex justify-between items-end  backdrop-blur z-50  duration-200 border-b ${isIntersecting
        ? "bg-zinc-900/0 border-transparent"
        : "bg-zinc-900/500  border-dark "
        }`}>
        <div className="w-[min(20lvw,83px)]">
            <Link
                href="/"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
            ><RadidevLogo /></Link>
        </div>
        <div className="text-bold text-light text-[2vw] opacity-50"><Link
            href="/"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
        >RadiDev</Link></div></div>
    </header>
}