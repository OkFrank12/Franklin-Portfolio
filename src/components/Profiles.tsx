import { FaFacebook, FaHandPointer, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <>
      <Link
        to={`/contact-info`}
        onClick={() => window.scrollTo(0, 0)}
        data-aos="zoom-in"
        className={`flex w-[300px] S500:w-[90%] S980:w-[43%] S1120:w-[220px] ml-5 S1270:w-[260px]  justify-between group items-center flex-col h-[250px] S1120:h-[200px] rounded-3xl bg-[#181818] cursor-pointer p-5`}
      >
        <div className="w-[95%] S1120:h-[60%] h-[70%] flex border-[0.2px] bg-[#1d1b1b] rounded-xl border-gray-700 justify-center items-center ">
          <div className="w-[80px] h-[80px] S1120:w-[50px] S1120:h-[50px] flex justify-center items-center border-[0.2px] bg-[#242121] rounded-full border-gray-700 mr-5 group duration-500 group-hover:bg-white">
            <FaFacebook size={40} className="group-hover:text-[#1d1b1b]" />
          </div>
          <div className="w-[80px] h-[80px] S1120:w-[50px] S1120:h-[50px] flex justify-center items-center border-[0.2px] bg-[#242121] rounded-full border-gray-700 group duration-500 group-hover:bg-white">
            <FaTwitter size={40} className="group-hover:text-[#1d1b1b]" />
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <p className="text-[14.5px] text-slate-500 S1120:text-[12px] uppercase">
              Connect with me
            </p>
            <p className="font-medium text-[23px] capitalize">profiles</p>
          </div>
          <FaHandPointer className="cursor-pointer text-slate-500 text-[35px] S1120:text-[25px] group-hover:text-white duration-500" />
        </div>
      </Link>
    </>
  );
};

export default Profiles;
