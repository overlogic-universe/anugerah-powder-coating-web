"use client"
import { NextPage } from 'next';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import CustomTitle from '../common/CustomTitle';

const Testimony: NextPage = ({}) => {
  return (
    <div id='testimoni' className="md:h-screen pt-20">
      <CustomTitle title={"Apakah kata Konsumen?"}/>
      <Swiper 
        className='mt-5'
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay:2500,
          disableOnInteraction:false,
        }}
        pagination={{
          clickable:true
        }}
        modules={[Autoplay,Pagination]}
      >
        <SwiperSlide>
          <div className="mb-20">
            <div className="mb-16 text-center italic leading-normal flex items-center justify-center space-x-2 relative">
              <Image src="/images/testimony/image-1.png" alt="Overlogic UMS" className="absolute top-0 left-1/3" height={40} width={40}/>
              <span className='block italic leading-normal w-60 mt-10'>Sangat puas dengan daya tahan dan ketahanan terhadap korosi. Powder coating membuat produk kami terlihat profesional dan awet!</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Image src="/images/testimony/image-2.png" alt='Overlogic ID' className='w-10 h-10 mb-2' width={40} height={40}/>
              <div className='flex flex-col'>
                <span className='font-bold'>Sholeh</span>
                <span>Powder Coating</span>
              </div>
                
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-20">
            <div className="mb-16 text-center italic leading-normal flex items-center justify-center space-x-2 relative">
              <Image src="/images/testimony/image-1.png" alt="Overlogic Universe" className="absolute w-10 h-10 top-0 left-1/3" width={40} height={40}/>
              <span className='block italic leading-normal w-60 mt-10'>Powder coating memberikan perlindungan yang sangat baik terhadap goresan dan cuaca. Kami tak pernah kecewa dengan kualitasnya!</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Image src="/images/testimony/image-2.png" className=' mb-2' alt='Overlogic' width={40} height={40}/>
              <div className='flex flex-col'>
                <span className='font-bold'>Ari</span>
                <span>Powder Coating</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-20">
            <div className="mb-16 text-center italic leading-normal flex items-center justify-center space-x-2 relative">
              <Image src="/images/testimony/image-1.png" alt="" className="absolute top-0 left-1/3" width={40} height={40}/>
              <span className='block italic leading-normal w-60 mt-10'>Hasil akhirnya benar-benar menakjubkan! Permukaannya halus, tahan lama, dan warnanya tetap cerah meskipun terkena cuaca ekstrem. Powder coating adalah pilihan yang tepat!</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Image src="/images/testimony/image-2.png" alt='Overlogic Team' className='mb-2' width={40} height={40}/>
              <div className='flex flex-col'>
                <span className='font-bold'>Gunawan</span>
                <span>Vapor Blasting</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
}

export default Testimony