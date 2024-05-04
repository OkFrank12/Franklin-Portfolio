import { FaHandPointer } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Specialization = () => {
  return (
    <>
      <Link
        to={`/service-offerings`}
        onClick={() => window.scrollTo(0, 0)}
        data-aos="zoom-in"
        className={`flex w-[570px] S1270:w-[500px] S1120:w-[450px] justify-between group items-center flex-col h-[250px] S1120:h-[200px] S980:w-full rounded-3xl bg-[#181818] cursor-pointer p-5`}
      >
        <div className="w-[80%] h-[70%] S500:w-full flex justify-between items-center ">
          <SiMongodb size={50} />
          <RiJavascriptFill size={50} />
          <FaReact size={50} />
          <FaNode size={50} />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <p className="text-[14.5px] text-slate-500 uppercase">
              specialization
            </p>
            <p className="font-medium text-[23px] capitalize">
              Service Offering
            </p>
          </div>
          <FaHandPointer className="cursor-pointer text-[35px] S1120:text-[25px] text-slate-500 group-hover:text-white duration-500" />
        </div>
      </Link>
    </>
  );
};

export default Specialization;
