import { NextPage } from "next";
import Link from "next/link";

interface Props {
  title: string;
  services: string[];
}

const PricingCard: NextPage<Props> = ({ title, services }) => {
  return (
    <div className="rounded-3xl p-2 w-full xl:w-[400px] border-black border border-opacity-10 shadow-gray-100 shadow-xl bg-white h-[500px]">
      <div className="bg-[#E8EDFA] p-3 rounded-2xl h-full flex justify-between flex-col min-w-[250px] max-w-[400px] flex-1">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-muted-foreground">Mulai dari</p>
          <p className="text-6xl pt-5 font-semibold">
            <span className="text-lg relative align-top top-[-15px]">Rp</span>
            50K
          </p>
          <div className="w-screen"></div>
          <p className="text-sm text-muted-foreground">Kami Melayani</p>
          <div className="h-[250px] overflow-y-scroll">
            <ul className="list-disc pl-6 text-sm">
              {services.map((service, index) => (
                <li className="text-base w-full" key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={"contact"} target="_blank" className="bottom-0 rounded-xl flex items-center justify-center px-6 py-3 text-white bg-blue-500 hover:bg-blue-600">
          <p className="text-xs lg:text-base">Hubungi Sekarang</p>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
