import { GalleryImageConstants } from "@/constants/GalleryImageConstants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
    image: string;
    title: string;
    description: string;
}

const ServicesCard: NextPage = ({ }) => {
    // return <div className="rounded-2xl p-2 w-full md:w-80 shadow-xl bg-white h-[257px]">
    //         <div className="bg-[#E8EDFA] p-3 rounded-2xl h-full flex justify-between flex-col">
    //             {/* <image className="h-48 w-full object-cover rounded-t-xl" src={image} alt={title} /> */}
    //             <Image src={GalleryImageConstants.image3} width={150} height={100} alt={"Powder Coating Pink Frame Mio"} className="rounded-2xl object-fill"></Image>
    //         </div>
    //         <div className="px-4 py-2">
    //             {/* <h3 className="text-lg font-bold text-gray-900">{title}</h3> */}
    //             {/* <p className="mt-2 text-gray-600">{description}</p> */}
    //         </div>
    //     </div>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="rounded-2xl p-2 shadow-xl drop-shadow bg-white h-[257px] min-w-[250px] max-w-[350px]">
                <div className="bg-[#E8EDFA] p-14 rounded-2xl flex justify-between flex-col">
                    <Image src={GalleryImageConstants.image3} width={150} height={100} alt={"Powder Coating Pink Frame Mio"} className="rounded-t-2xl object-cover text-center"></Image>
                </div>
                <div className="px-4 py-2">
                    {/* <h3 className="text-lg font-bold text-gray-900">{title}</h3> */}
                    {/* <p className="mt-2 text-gray-600">{description}</p> */}
                </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl p-2 shadow-xl drop-shadow bg-white h-[257px] min-w-[250px] max-w-[350px]">
                <div className="bg-[#E8EDFA] p-14 rounded-2xl flex justify-between flex-col">
                    {/* <Image src={GalleryImageConstants.image3} width={150} height={100} alt={"Powder Coating Pink Frame Mio"} className="rounded-t-2xl object-cover text-center"></Image> */}
                </div>
                <div className="px-4 py-2">
                    {/* <h3 className="text-lg font-bold text-gray-900">{title}</h3> */}
                    {/* <p className="mt-2 text-gray-600">{description}</p> */}
                </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl p-2 shadow-xl drop-shadow bg-white h-[257px] min-w-[250px] max-w-[350px]">
                <div className="bg-[#E8EDFA] p-14 rounded-2xl flex justify-between flex-col">
                    {/* <Image src={GalleryImageConstants.image3} width={150} height={100} alt={"Powder Coating Pink Frame Mio"} className="rounded-t-2xl object-cover text-center"></Image> */}
                </div>
                <div className="px-4 py-2">
                    {/* <h3 className="text-lg font-bold text-gray-900">{title}</h3> */}
                    {/* <p className="mt-2 text-gray-600">{description}</p> */}
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;