"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { HeaderImageConstants } from "@/constants/HeaderImageConstants";
 
export default function Home() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  
  {
    title: "Editorially",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  
  {
    title: "Algochurn",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  
  {
    title: "Creme Digital",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Golden Bells Academy",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "Invoker Labs",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
  {
    title: "E Free Invoice",
    link: "#",
    thumbnail:
    HeaderImageConstants.image1
  },
];