import { FaHandPointer } from "react-icons/fa6";
import signature from "../assets/signature (1).png";
import { Link } from "react-router-dom";

const Credentials = () => {
  return (
    <>
      <Link
        to={`/more-about-me`}
        onClick={() => window.scrollTo(0, 0)}
        data-aos="zoom-in"
        className={`flex  w-[48%] S500:w-full justify-between group items-center flex-col h-[250px] S1120:h-[201px] rounded-3xl bg-[#181818] cursor-pointer p-5`}
      >
        <div className="w-full h-full flex justify-center items-center ">
          <img src={signature} className="" />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <p className="text-[14.5px] S1120:text-[12px] text-slate-500 uppercase">
              more about me
            </p>
            <p className="font-medium text-[23px] capitalize">credentials</p>
          </div>
          <FaHandPointer className="cursor-pointer S1120:text-[25px] text-[35px] text-slate-500 group-hover:text-white duration-500" />
        </div>
      </Link>
    </>
  );
};

export default Credentials;
