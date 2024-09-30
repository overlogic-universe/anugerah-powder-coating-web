import { NextPage } from "next";
import PricingCard from "./PricingCard";

interface Props {}

const Pricing: NextPage<Props> = ({}) => {
  return (
    <div className="w-full flex-1 p-5 md:px-5 lg:px-20 xl:px-64 2xl:px-72 items-center justify-center md:h-screen">
      <p className="md:text-xl lg:text-2xl xl:text-5xl font-bold text-center">Layanan Powder Coating</p>
      <div className="flex items-center justify-center flex-col md:flex-row gap-5 mt-5">
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
