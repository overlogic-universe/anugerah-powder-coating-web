import { NextPage } from "next";
import ServicesCard from "./ServicesCard";
import { ServiceImageConstants } from "@/constants/ServiceImageConstants";
import CustomTitle from "../common/CustomTitle";

const Service: NextPage = ({}) => {
  return (
    <div
      id="layanan"
      className=" w-full flex items-center justify-center flex-col px-3 md:px-5 xl:px-10 2xl:px-0 "
    >
      <CustomTitle title={"Apa yang kami tawarkan?"} />
      <div className="md:w-full 2xl:w-[1250px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
        {serviceList.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.images}
            title={service.title}
            description={service.desc}
          />
        ))}
      </div>
    </div>
  );
};

export const serviceList = [
  {
    images: ServiceImageConstants.image2,
    title: "Vapor Blasting",
    desc: "Membersihkan dan menghilangkan kotoran oksidasi dan pewarnaan tanpa menghilangkan logam atau mengurangi yang mendasarinya.",
  },
  {
    images: ServiceImageConstants.image3,
    title: "Powder Coating",
    desc: "Teknik pewarnaan menggunakan bubuk warna khusus yang dipanaskan.",
  },
  {
    images: ServiceImageConstants.image1,
    title: "Vapor Blasting + Powder Coating",
    desc: "Kombinasi kedua teknik ini memastikan permukaan sparepart anda menjadi bersih dan terlindungi dengan lapisan akhir berkualitas tinggi.",
  },
];

export default Service;
