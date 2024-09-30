import { NextPage } from "next";
import Image from "next/image";
import GalleryBox from "./GalleryBox";

interface Props {}

const Gallery: NextPage<Props> = ({}) => {
  return (
    <div className="container">
      <p className="md:text-xl lg:text-2xl xl:text-5xl font-bold text-center">
        Galeri Anugerah Powder Coating
      </p>
      <GalleryBox />
    </div>
  );
};

export default Gallery;
