import { NextPage } from 'next';
import ServicesCard from './ServicesCard';
import { ServiceImageConstants } from '@/constants/ServiceImageConstants';
import CustomTitle from '../common/CustomTitle';

const Service: NextPage = ({ }) => {
  return (
    <div id='layanan' className="w-full flex h-full p-5 items-center flex-col">
      <CustomTitle title={"Apa yang kami tawarkan?"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 xl:mt-10 items-center justify-center">
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
    images: ServiceImageConstants.image1,
    title: 'Vapor Blasting + Powder Coating',
    desc: 'Kombinasi kedua teknik ini memastikan permukaan sparepart anda menjadi bersih dan terlindungi dengan lapisan akhir berkualitas tinggi.',
  },
  {
    images: ServiceImageConstants.image2,
    title: 'Vapor Blasting',
    desc: 'Membersihkan dan menghilangkan kotoran oksidasi dan pewarnaan tanpa menghilangkan logam atau mengurangi yang mendasarinya.',
  },
  {
    images: ServiceImageConstants.image3,
    title: 'Powder Coating',
    desc: 'Teknik pewarnaan menggunakan bubuk warna khusus yang dipanaskan.',
  },
];

export default Service;
