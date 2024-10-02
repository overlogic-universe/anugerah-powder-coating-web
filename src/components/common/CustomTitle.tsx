import { NextPage } from "next";

interface Props {
  title: string;
}

const CustomTitle: NextPage<Props> = ({ title }) => {
  return (
    <div>
      <p className="md:text-xl lg:text-2xl xl:text-5xl font-bold text-center">
        {title}
      </p>
    </div>
  );
};

export default CustomTitle;
