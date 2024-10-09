import { NextPage } from "next";
import GalleryBox from "./GalleryBox";
import CustomTitle from "../common/CustomTitle";

const Gallery: NextPage = ({}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div id="galeri" className="md:w-full 2xl:w-[1250px]">
        <CustomTitle title={"Galeri Anugerah Powder Coating"} />
        <GalleryBox />
      </div>
    </div>
  );
};

export default Gallery;
