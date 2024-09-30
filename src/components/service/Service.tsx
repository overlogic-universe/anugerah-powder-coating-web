import { GalleryImageConstants } from '@/constants/GalleryImageConstants';
import { NextPage } from 'next'
import ServicesCard from './ServicesCard';

interface Props {}

const Service: NextPage<Props> = ({}) => {
  return <div className="w-full flex-1 p-5 md:px-5 lg:px-20 xl:px-64 2xl:px-72 items-center justify-center md:h-screen">
    <p className="md:text-xl lg:text-2xl xl:text-5xl font-bold text-center">Apa yang kami tawarkan?</p>
    <div className="items-center justify-center flex-col md:flex-row gap-5 mt-5 xl:mt-10">
      <ServicesCard />
        {/* {serviceList.map((images, title, description, index) => (
          <serviceList key={index} title={price.title} services={price.services} />
        ))} */}
      </div>
  </div>
};

export const serviceList = [
  {
    images: GalleryImageConstants.image1,
    title: "Vapor Blasting + Powder Coating",
    description: "Kombinasi kedua teknik ini memastikan permukaan sparepart anda menjadi bersih dan terlindungi dengan lapisan akhir berkualitas tinggi."
  },
  {
    images: GalleryImageConstants.image2,
    title: "Vapor Blasting",
    description: "Membersihkan dan menghilangkan kotoran oksidasi dan pewarnaan tanpa menghilangkan logam atau mengurangi yang mendasarinya."
  },
  {
    images: GalleryImageConstants.image3,
    title: "Powder Coating",
    description: "Teknik pewarnaan menggunakan bubuk warna khusus yang dipanaskan."
  }
]

export default Service