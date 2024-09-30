"use client";
import { NextPage } from 'next';
import MapComponent from '@/components/map/Map';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
const Footer:NextPage = ({}) => {
  return (
    <div className='bg-[#111111] text-white'>
      <div className=' py-8 px-20'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:px-0'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <Image src="/images/logo/logo.png " alt="Logo" className='object-contain' height={80} width={150}/>
            <p className='mt-1 text-sm w-96 font-semibold italic'>Layanan coating terbaik dengan kualitas tinggi untuk melindungi dan mempercantik berbagai produk logam anda. Hubungi kami untuk informasi lebih lanjut dan penawaran spesial</p>
            <div className='flex space-x-4 mt-4'>
              <a href="https://www.instagram.com/anugerahpowdercoatingblora/" target='_blank'>
                <Image src="/images/footer/image-1.png" alt="Instagram" className='h-8 w-8' height={32} width={32} />
              </a>
              <a href="https://www.tiktok.com/@anugerah.powder.c" target='_blank'>
                <Image src='/images/footer/image-2.png' alt='Tiktok' className='h-8 w-8' height={32} width={32}/>
              </a>
            </div>
          </div>
          <div className='md:w-1/2 '>
            <h3 className='text-lg font-semibold mb-3'>Temukan kami</h3>
            <MapComponent></MapComponent>
            <span className='text-base '>Dekat Jl. KNPI 17, Kec. Blora, Kabupaten Blora, Jawa Tengah 58219, Kabupaten Blora, Jawa Tengah 58216</span>
          </div>
        </div>
      </div>
      <div className='text-center mt-10 border-t border-white opacity-55'></div>
      <p className=' text-white text-bold text-center pt-4 pb-4'>@All rights reserved - 2024 | Created by Overlogic</p>
    </div>
    
    
  );
}

export default Footer