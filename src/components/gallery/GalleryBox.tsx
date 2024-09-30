import { GalleryImageConstants } from "@/constants/GalleryImageConstants";
import { NextPage } from "next";
import Image from "next/image";

const GalleryBox: NextPage = ({}) => {
  return (
    <div className="px-5 grid grid-cols-4 grid-rows-5 md:grid-cols-4 md:grid-rows-4 h-5/6 md:px-5 lg:px-20 xl:px-64 2xl:px-72 py-5 gap-5">
      {/* SEO */}
      <div className="hidden">
        <p>Vapor Blasting Blora</p>
        <p>Powder Coating Blora</p>
        <p>Overlogic ID</p>
        <p>Fosti UMS</p>
      </div>
      <div className="w-full col-span-4 row-span-2 md:col-span-3 md:row-span-2">
        <Image
          src={GalleryImageConstants.image1}
          width={200}
          height={200}
          alt={"Vapor Blasting Powder Coating hitam Texture Pasir Mesin Tiger"}
          className="rounded-2xl object-cover w-full h-full align-bottom"
        />
      </div>
      <div className="w-full col-span-2 row-span-3 md:col-span-1 md:row-span-4 h-full">
        <video
          width="320"
          height="240"
          controls
          preload="none"
          autoPlay
          loop
          muted
          src="/videos/gallery/video-1.mp4"
          className="rounded-2xl h-full object-cover"
        />
      </div>
      <div className="w-full col-span-2 row-span-2 md:col-span-1 md:row-span-2 h-full">
        <Image
          src={GalleryImageConstants.image2}
          width={200}
          height={200}
          alt={"Powder Coating Pink Frame Mio"}
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="w-full col-span-2 row-span-2 md:col-span-1 md:row-span-2 h-full">
        <Image
          src={GalleryImageConstants.image3}
          width={200}
          height={200}
          alt={
            "Vapor Blasting Powder Coating Brown Texture Beige Mesin CBR tanpa Belah"
          }
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="w-full col-span-2 row-span-1 md:col-span-1 md:row-span-2 h-full">
        <Image
          src={GalleryImageConstants.image4}
          width={200}
          height={200}
          alt={
            "Vapor Blasting Powder Coating Blue Texture Mesin Supra tanpa Belah"
          }
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};


export default GalleryBox;
