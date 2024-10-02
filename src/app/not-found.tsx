import { NextPage } from "next";
import Image from "next/image";

const NotFound: NextPage = ({}) => {
  return (
    <div className={"flex flex-col items-center justify-center h-screen overflow-hidden"}>
      <h1 className="text-9xl">404</h1>
      <h3 className="text-xl">Page Not Found</h3>
      <div className="flex mt-4 space-x-2 items-center">
        <p className="text-sm">Powered by</p>
        <Image src={"/images/logo/overlogic-logo.jpg"} alt={"Logo Overlogic ID"} width={250} height={250}/>
      </div>
    </div>
  );
};

export default NotFound;