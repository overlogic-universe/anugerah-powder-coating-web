import { NextPage } from "next";
import { Compare as Comparator } from "../ui/compare";
import { CompareImageConstants } from "@/constants/CompareImageConstants";
import CustomTitle from "../common/CustomTitle";

const Compare: NextPage = ({}) => {
  return (
    <div id="perbandingan" className="w-full flex flex-col p-5 items-center justify-center md:h-screen">
      <CustomTitle title={"Sebelum dan Sesudah"}/>
      <div className="p-3 mt-5 border-black border border-opacity-0 sm:border-opacity-10 shadow-gray-100 shadow-xl rounded-3xl">
        <Comparator
          firstImage={CompareImageConstants.image1}
          secondImage={CompareImageConstants.image2}
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] lg:w-[1215px] md:h-[500px] md:w-[800px] sm:w-screen"
          slideMode="hover"
        />
      </div>
    </div>
  );
};

export default Compare;
