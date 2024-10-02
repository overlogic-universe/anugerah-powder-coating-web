import { NextPage } from "next";
import GalleryBox from "./GalleryBox";
import CustomTitle from "../common/CustomTitle";

const Gallery: NextPage = ({}) => {
  return (
    <div id="galeri" className="w-full flex flex-col p-5 items-center justify-center md:h-screen">
      <CustomTitle title={"Galeri Anugerah Powder Coating"}/>
      <GalleryBox />
    </div>
  );
};

export default Gallery;
