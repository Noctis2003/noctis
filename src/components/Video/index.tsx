"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      const rect = video.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        video.play().catch(() => {
          // Handle play promise rejection (e.g., user hasn't interacted yet)
        });
      } else {
        video.pause();
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#1a0033] dark:to-[#000000]">
        <div className="container">
          <SectionTitle
            title="We are ready to collaborate"
            paragraph="Let's work together to achieve great things."
            center
            mb="80px"
          />

          {/* Video block */}
          <div className="relative flex justify-center">
            <video
              ref={videoRef}
              src="/synth.mp4"
              className="w-full max-w-3xl rounded-2xl shadow-lg"
              preload="auto"
              playsInline
              muted
            />
          </div>
        </div>
      </section>
    </>
  );
}
