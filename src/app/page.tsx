import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Home from "@/components/home/home";
import Pricing from "@/components/pricing/Pricing";
import Service from "@/components/service/Service";
import Testimony from "@/components/testimony/Testimony";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Home />
      <Service />
      <Pricing />
      <Gallery />
      <Testimony />
      <Footer />
    </>
  );
};

export default Page;
