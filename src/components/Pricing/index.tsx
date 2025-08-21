"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Open from "@/assets/open.svg";
import Star from "@/assets/star.svg";
import Student from "@/assets/student.svg";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#1a0033] dark:to-[#000000]">
      <div className="container">
        <SectionTitle
          title="Careers at Noctisgroup"
          paragraph="We welcome all the rebels, thinkers, misfits who fit outside the norm"
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
          {/* Open Source Experience */}
          <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md mx-auto md:mx-0">
                <Image src={Open} alt="Open Source" />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white text-center md:text-left">
                We Hire Through Open Source Experience
              </h3>
              <p className="text-body-color text-base leading-relaxed font-medium text-center md:text-left">
                We believe the best way to evaluate talent is through real contributions. Show us your passion through your open source work, contributions to projects, and code that speaks for itself. We look for developers who contribute to the community, solve real problems, and demonstrate their skills through meaningful projects. Your GitHub is your resume.
              </p>
            </div>
          </div>

          {/* Co-founders */}
          <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay=".25s">
              <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md mx-auto md:mx-0">
                <Image src={Star} alt="Co-founders" />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white text-center md:text-left">
                Looking for Co-Founders
              </h3>
              <p className="text-body-color text-base leading-relaxed font-medium text-center md:text-left">
                We&apos;re seeking visionary co-founders with past entrepreneurship experience who share our mission of building products that truly matter. If you&apos;ve started companies before, understand the startup journey, and want to join forces to create the future together, we want to hear from you. Bring your experience, passion, and unique perspective to help shape our vision.
              </p>
            </div>
          </div>

          {/* Application Process */}
          <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay=".35s">
              <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md mx-auto md:mx-0">
                <Image src={Student} alt="Apply" />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white text-center md:text-left">
                Ready to Join Us?
              </h3>
              <p className="text-body-color text-base leading-relaxed font-medium text-center md:text-left mb-6">
                Whether you&apos;re a developer passionate about open source or an experienced entrepreneur looking for your next adventure, we&apos;d love to hear from you. Send us your story, your work, and what drives you.
              </p>
              <div className="text-center md:text-left">
                <a 
                  href="mailto:hr@noctisgroup.online" 
                  className="rounded-3xl bg-gradient-to-br from-gray-600/20 via-gray-900 to-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:from-gray-500/30 hover:via-gray-800 hover:to-black hover:scale-105 transform shadow-lg hover:shadow-xl border border-gray-600/20 inline-block"
                >
                  Apply Now - hr@noctisgroup.online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
