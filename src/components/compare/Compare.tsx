import { NextPage } from "next";
import { Compare as Comparator } from "../ui/compare";
import { CompareImageConstants } from "@/constants/CompareImageConstants";
import CustomTitle from "../common/CustomTitle";

const Compare: NextPage = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div id="perbandingan" className="w-full 2xl:w-[1250px]">
        <CustomTitle title={"Sebelum dan Sesudah"} />
        <div className="p-2 mx-3 md:mx-5 xl:mx-10 2xl:mx-0 border-black border grid border-opacity-10 shadow-gray-100 shadow-xl rounded-3xl">
          <Comparator
            firstImage={CompareImageConstants.image1}
            secondImage={CompareImageConstants.image2}
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="!w-full overflow-hidden grid-cols-1 grid-rows-1"
            slideMode="hover"
          />
        </div>
      </div>
    </div>
  );
};

export default Compare;
