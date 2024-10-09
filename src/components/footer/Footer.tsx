"use client";
import { NextPage } from 'next';
import MapComponent from '@/components/map/Map';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
const Footer:NextPage = ({}) => {
  return (
    <div className='bg-[#111111] text-white flex items-center justify-center flex-col'>
      <div className='py-8 md:px-10 xl:px-0 w-full px-10'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:px-0'>
          <div className='md:w-1/2 mb-8 mx-10 xl:mb-0'>
            <Image src="/images/logo/anugerah-logo.png" alt="Logo" className='object-contain w-32' height={800} width={800}/>
            <p className='mt-1 text-sm sm:w-96 font-semibold italic'>Layanan coating terbaik dengan kualitas tinggi untuk melindungi dan mempercantik berbagai produk logam anda. Hubungi kami untuk informasi lebih lanjut dan penawaran spesial</p>
            <div className='flex space-x-4 mt-4'>
              <a href="https://www.instagram.com/anugerahpowdercoatingblora/" target='_blank'>
                <Image src="/images/footer/image-1.png" alt="Instagram" className='h-8 w-8' height={32} width={32} />
              </a>
              <a href="https://www.tiktok.com/@anugerah.powder.c" target='_blank'>
                <Image src='/images/footer/image-2.png' alt='Tiktok' className='h-8 w-8' height={32} width={32}/>
              </a>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <h3 className='text-lg font-semibold mb-2'>Temukan kami</h3>
            <MapComponent></MapComponent>
            <p className='text-sm mt-2'>Dekat Jl. KNPI 17, Kec. Blora, Kabupaten Blora, Jawa Tengah <a href='https://maps.app.goo.gl/6TnydRCDvsreXKhP8' target='_blank' className='text-blue-500 cursor-pointer underline'>Lihat lebih detail</a></p>
          </div>
        </div>
      </div>
      <div className='text-center mt-10 w-full border-t border-white opacity-25'></div>
      <p className='text-white text-bold text-center text-xs md:text-base pt-4 pb-4'>©All rights reserved - 2024 | Created by Overlogic</p>
    </div>
    
    
  );
}

export default Footer