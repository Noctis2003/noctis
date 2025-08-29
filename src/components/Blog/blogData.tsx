import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Posthumous AI",
    paragraph:
      "With AI advancing rapidly, it’s now increasingly possible to create detailed digital replicas of people using their online presence, including social media activity, posts, and interactions. These replicas can mimic their speech patterns, personality traits, and even the way they respond to questions. As a result, it’s becoming possible to interact with a version of someone long after they’re gone.",
    image: "/images/blog/vanced.png",
    author: {
      name: "Manjot Singh",
      image: "/images/logo/logo.png",
      designation: "System designer",
    },
    tags: ["creative", "philosophy"],
    publishDate: "2025",
  },
  {
    id: 2,
   title: "An Ice-Breaker Platform for Students",
   paragraph:
     "A conversation-first platform designed for college students in America. Built to encourage meaningful dialogue, fresh perspectives, and collaborative connections beyond rigid labels. A safe space to exchange ideas, explore different viewpoints, and build networks that grow with you.",
   image: "/images/blog/dating.jpg",
   author: {
     name: "Amrit",
     image: "/images/blog/author-02.png",
     designation: "Content Writer",
    },
    tags: ["Dating", "love"],
    publishDate: "2025",
  },
  {
    id: 3,
   title: "A College Collaboration App",
paragraph:
  "A dynamic platform where students can connect across colleges in America to buy and sell items, collaborate on projects, join hackathons, or even find creative partners. Built to spark opportunities and genuine connections beyond the classroom.",
    image: "/images/blog/pixar.jpg",
    author: {
      name: "Jay",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Collaboration", "productivity"],
    publishDate: "2025",
  },
  
];

export default blogData;
