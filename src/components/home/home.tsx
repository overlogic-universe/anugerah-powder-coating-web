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
    title: "Yamaha Vapor Blasting + Coating Powder",
    link: "#",
    thumbnail: HeaderImageConstants.image1,
  },
  {
    title: "RX King Vapor Blasting + Coating Powder",
    link: "#",
    thumbnail: HeaderImageConstants.image2,
  },
  {
    title: "Coating Blue Texture Mesin Supra",
    link: "#",
    thumbnail: HeaderImageConstants.image3,
  },

  {
    title: "Vapor Blasting Powder Coating Brown Texture Beige Mesin CBR",
    link: "#",
    thumbnail: HeaderImageConstants.image4,
  },
  {
    title: "Vapor Blasting Powder Coating Mesin Tiger",
    link: "#",
    thumbnail: HeaderImageConstants.image5,
  },
  {
    title: "Vapor Blasting Powder Coating Mesin TDR",
    link: "#",
    thumbnail: HeaderImageConstants.image6,
  },

  {
    title: "Vapor Blasting dan Coating Powder Texture Abu Abu",
    link: "#",
    thumbnail: HeaderImageConstants.image8,
  },
  {
    title: "Powder Coating",
    link: "#",
    thumbnail: HeaderImageConstants.image7,
  },
  {
    title: "Powder Coating Hitam",
    link: "#",
    thumbnail: HeaderImageConstants.image9,
  },
  {
    title: "Powder Coating",
    link: "#",
    thumbnail: HeaderImageConstants.image10,
  },
  {
    title: "Vapor Blasting",
    link: "#",
    thumbnail: HeaderImageConstants.image11,
  },

  {
    title: "Powder Coating Hitam",
    link: "#",
    thumbnail: HeaderImageConstants.image12,
  },
  {
    title: "Powder Coating Kawasaki",
    link: "#",
    thumbnail: HeaderImageConstants.image13,
  },
  {
    title: "Powder Coating Kawasaki",
    link: "#",
    thumbnail: HeaderImageConstants.image14,
  },
  {
    title: "Powder Coating Yamaha",
    link: "#",
    thumbnail: HeaderImageConstants.image15,
  },
];
