import Compare from "@/components/compare/Compare";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Home from "@/components/home/home";
import Navbar from "@/components/navbar/Navbar";
import Pricing from "@/components/pricing/Pricing";
import Service from "@/components/service/Service";
import Testimony from "@/components/testimony/Testimony";
import { NextPage } from "next";

const Page: NextPage = ({}) => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Compare />
      <Pricing />
      <Gallery />
      <Testimony />
      <Footer />
    </>
  );
};

export default Page;
