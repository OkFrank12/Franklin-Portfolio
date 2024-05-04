import { FaHandPointer, FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WorkTogether = () => {
  return (
    <>
      <Link
        to={`/contact-info`}
        onClick={() => window.scrollTo(0, 0)}
        data-aos="zoom-in"
        className={`flex S1270:w-[515px] S980:w-[90%] S980:mt-5 S1120:h-[200px] S1120:w-[450px] relative w-[595px] justify-between group S500:justify-center items-center h-[250px] rounded-3xl bg-[#181818] cursor-pointer p-5`}
      >
        <p className="text-[50px] S1120:text-[40px] S500:text-center font-semibold">
          Let's <br /> Build <span className="text-[#5B78F6]">Together.</span>
        </p>
        <FaHandPointer className="cursor-pointer text-[35px] S1120:text-[25px] absolute bottom-7 right-7 text-slate-500 group-hover:text-white duration-500" />
        <FaCode
          size={20}
          className="cursor-pointer S500:hidden absolute top-7 text-slate-500 group-hover:text-white duration-500"
        />
        <FaCode
          size={20}
          className="cursor-pointer S500:hidden absolute top-7 right-40 text-slate-500 group-hover:text-white duration-500"
        />
        <FaCode
          size={20}
          className="cursor-pointer S500:hidden absolute top-20 left-40 text-slate-500 group-hover:text-white duration-500"
        />
        <FaCode
          size={20}
          className="cursor-pointer S500:hidden absolute bottom-7 left-80 text-slate-500 group-hover:text-white duration-500"
        />
        <FaCode
          size={20}
          className="cursor-pointer S500:hidden absolute top-17 right-10 text-slate-500 group-hover:text-white duration-500"
        />
      </Link>
    </>
  );
};

export default WorkTogether;
