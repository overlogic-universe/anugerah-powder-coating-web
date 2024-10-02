import { NextPage } from "next";
import GalleryBox from "./GalleryBox";
import CustomTitle from "../common/CustomTitle";

const Gallery: NextPage = ({}) => {
  return (
    <div id="galeri" className="container flex items-center flex-col mb-20">
      <CustomTitle title={"Galeri Anugerah Powder Coating"}/>
      <GalleryBox />
    </div>
  );
};

export default Gallery;
