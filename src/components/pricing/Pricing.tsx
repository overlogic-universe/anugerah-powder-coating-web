import { NextPage } from "next";
import PricingCard from "./PricingCard";
import CustomTitle from "../common/CustomTitle";

const Pricing: NextPage = ({}) => {
  return (
    <div id="pricelist" className="w-full flex flex-col p-5 items-center justify-center md:h-screen">
      <CustomTitle title={"Layanan Powder Coating"}/>
      {/* <div className="flex items-center xl:w-[1240px] justify-center flex-col md:flex-row gap-5 mt-5"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 xl:mt-10 items-center justify-center">
        {priceList.map((price, index) => (
          <PricingCard key={index} title={price.title} services={price.services} />
        ))}
      </div>
    </div>
  );
};

export const priceList = [
  {
    title: "Vapor Blasting + Powder Coating",
    services: [
      "Mesin Motor Cowok Set Sudah Copot",
      "Mesin Motor Set Bongkar Pasang",
      "Mesin Bebek Set",
      "Mesin Bebek Set Bongkar Pasang",
      "Mesin Vespa Set",
    ],
  },
  {
    title: "Vapor Blasting",
    services: [
      "Crengkes Motor Cowok",
      "Crengkes Motor Cewek",
      "Crengkes Vespa",
      "Tromol Vespa 1 Biji",
      "Karbu",
      "Crengkes Matic",
      "Tromol 1 Biji",
      "Nap Gear",
      "Bureng Kop Matic",
    ],
  },
  {
    title: "Powder Coating",
    services: [
      "Rangka Motor Cowok",
      "Rangka Motor Cewek",
      "Rangka Motor Primer/Bebek",
      "Blok Kanan Kiri",
      "Blok Kanan Kiri + Tulisan",
      "Blok Kanan Kiri Candy + Tulisan",
      "Bureng Kop Head Tromol Set",
      "Tromol Set Candy",
      "Bottom 1 Set",
      "Bottom Moge 1 Set",
      "Segitiga T",
      "Segitiga T Candy",
      "Porok Depan Vespa",
      "Kipas Magnet Vespa",
      "Velg Motor Warna Biasa",
      "Velg Motor Warna Candy",
      "Handle Rim Kanan Kiri",
      "Piringan Cakram",
      "Piringan Cakram Candy",
      "Arm Belakang",
      "Arm Belakang Candy",
      "Bak CVT",
      "Bak CVT Candy",
      "Velg Jari Jari",
      "Velg Jari Jari Candy",
      "Stang Motor",
      "Pully Matic Holder",
      "Knalpot HI TEMP FULL",
      "Knalpot HI TEMP GEMBUNG",
      "Frame Sepeda Warna Candy",
      "Frame Sepeda Warna Basic",
      "Begel Motor Besar",
      "Begel Motor Kecil",
    ],
  },
];


export default Pricing;
