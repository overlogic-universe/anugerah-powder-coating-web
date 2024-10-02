"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { HeaderImageConstants } from "@/constants/HeaderImageConstants";

export default function Home() {
  return (
    <div id="home">
      <HeroParallax products={products} />;
    </div>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: HeaderImageConstants.image1,
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail: HeaderImageConstants.image2,
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail: HeaderImageConstants.image3,
  },

  {
    title: "Editorially",
    link: "#",
    thumbnail: HeaderImageConstants.image4,
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail: HeaderImageConstants.image5,
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: HeaderImageConstants.image6,
  },

  {
    title: "Algochurn",
    link: "#",
    thumbnail: HeaderImageConstants.image8,
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail: HeaderImageConstants.image7,
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail: HeaderImageConstants.image9,
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail: HeaderImageConstants.image10,
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail: HeaderImageConstants.image11,
  },

  {
    title: "Creme Digital",
    link: "#",
    thumbnail: HeaderImageConstants.image12,
  },
  {
    title: "Golden Bells Academy",
    link: "#",
    thumbnail: HeaderImageConstants.image13,
  },
  {
    title: "Invoker Labs",
    link: "#",
    thumbnail: HeaderImageConstants.image14,
  },
  {
    title: "E Free Invoice",
    link: "#",
    thumbnail: HeaderImageConstants.image15,
  },
];
