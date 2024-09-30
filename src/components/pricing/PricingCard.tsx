import { NextPage } from "next";

interface Props {
  title: String;
  services: String[];
}

const PricingCard: NextPage<Props> = ({ title, services }) => {
  return (
    <div className="rounded-2xl p-2 w-full md:w-80 shadow-xl bg-white h-[500px]">
      <div className="bg-[#E8EDFA] p-3 rounded-2xl h-full flex justify-between flex-col">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-muted-foreground">Mulai dari</p>
          <p className="text-6xl pt-5 font-semibold">
            <span className="text-lg relative align-top top-[-15px]">Rp</span>
            50K
          </p>
          <p className="text-sm text-muted-foreground">Kami Melayani</p>
          <div className="h-[250px] overflow-y-scroll">
            <ul className="list-disc pl-6 text-sm">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="bottom-0 rounded-xl flex items-center justify-center px-6 py-3 text-white bg-blue-500 hover:bg-blue-600">
          <p className="text-xs lg:text-md">Hubungi Sekarang</p>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
