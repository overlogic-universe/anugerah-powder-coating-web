import { NextPage } from "next";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

const ServicesCard: NextPage<Props> = ({ image, title, description }) => {
  return (
    <div className="rounded-3xl p-2 border-black border border-opacity-10 shadow-gray-200 bg-white h-[320px] min-w-[250px] max-w-[400px]">
      <div className="bg-[#E8EDFA] p-14 rounded-2xl flex justify-center items-center h-[130px] flex-col">
        <Image
          src={image}
          width={120}
          height={120}
          alt={title}
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
