import { Feature } from "@/types/feature";
import Student from "@/assets/student.svg";
import Brain from "@/assets/brain.svg";
import socialMedia from "@/assets/socialm.svg";
import College from "@/assets/college.svg";
import Robot from "@/assets/robot.svg";
import Fun from "@/assets/playground.svg";
import Star from "@/assets/star.svg";
import Image from "next/image";
import Open from "@/assets/open.svg";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image src={Fun} alt="Fun" className="animate-bounce-subtle" />
    ),
    title: "Not to Work, but to Have Fun",
paragraph:
  "We are always on the lookout for people who are deeply passionate and don’t view their work as just a job, but as an extension of themselves. We seek individuals who bring energy, creativity, and dedication to everything they do."
  },
  {
    id: 2,
    icon: (
      <Image src={Star} alt="Star" className="animate-pulse-ring" />
    ),
title: "High-Quality Design",
paragraph:
  "We believe in perfection. No half-baked ideas, no disposable products—only purposeful designs built to last and truly matter.",
},
  {
    id: 3,
    icon: (
      <Image src={Robot} alt="Brain" className="animate-float-rotate" />
    ),
title: "Using AI to Rapidly Prototype",
paragraph:
  "We leverage AI to turn ideas into reality at incredible speed. By rapidly prototyping, we can experiment, iterate, and refine solutions faster than ever before—transforming concepts into impactful products."
  },
  {
    id: 4,
    icon: (
      <Image src={College} alt="College" className="animate-spin-y" />
    ),
title: "Building for Students",
paragraph:
  "We create tools and platforms designed specifically for students—helping them connect, collaborate, and unlock new opportunities both inside and outside the classroom."
  },
  {
    id: 5,
    icon: (
  <Image src={socialMedia} alt="Social Media" className="animate-ring" />
    ),
    title: "Changing How We Use Social Media",
paragraph:
  "We believe social media has grown hollow—driven by screens, scrolling, and empty noise. Our vision is to build a new protocol for healthy collaboration, one that values real-world connection and genuine human interaction over endless doomscrolling.",
  },
  {
    id: 6,
    icon: (
      <Image src={Open} alt="Open" className="animate-orbit" />
    ),
    title: "Free and Open-Source",
paragraph:
  "Built with freedom at its core, open for everyone to use, learn, and improve. No walls, no limits—just collaboration and growth for all.",
  },
];
export default featuresData;
