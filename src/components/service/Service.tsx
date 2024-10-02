import { GalleryImageConstants } from '@/constants/GalleryImageConstants';
import { NextPage } from 'next';
import ServicesCard from './ServicesCard';

interface Props { }

const Service: NextPage<Props> = ({ }) => {
  return (
    <div className="w-full flex-1 p-5 md:px-5 lg:px-20 xl:px-64 2xl:px-72 items-center justify-center md:h-screen">
      <p className="md:text-xl lg:text-2xl xl:text-5xl font-bold text-center">
        Apa yang kami tawarkan?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-5 xl:mt-10 items-center justify-center">
        
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
    images: GalleryImageConstants.image6,
    title: 'Vapor Blasting + Powder Coating',
    desc: 'Kombinasi kedua teknik ini memastikan permukaan sparepart anda menjadi bersih dan terlindungi dengan lapisan akhir berkualitas tinggi.',
  },
  {
    images: GalleryImageConstants.image5,
    title: 'Vapor Blasting',
    desc: 'Membersihkan dan menghilangkan kotoran oksidasi dan pewarnaan tanpa menghilangkan logam atau mengurangi yang mendasarinya.',
  },
  {
    images: GalleryImageConstants.image7,
    title: 'Powder Coating',
    desc: 'Teknik pewarnaan menggunakan bubuk warna khusus yang dipanaskan.',
  },
];

export default Service;
