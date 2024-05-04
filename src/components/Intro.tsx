import { Link } from "react-router-dom";
import pic from "../assets/WhatsApp Image 2023-12-01 at 6.11.24 AM.jpeg";
import { FaHandPointer } from "react-icons/fa6";

const Intro = () => {
  return (
    <>
      <Link
        to={`/self-summary`}
        onClick={() => window.scrollTo(0, 0)}
        data-aos="zoom-in"
        className="w-[570px] S1120:w-[450px] S980:w-[90%] S1270:mr-5 S980:m-0 S1270:w-[500px] group relative items-center S980:mb-5 S500:flex-col flex bg-[#181818] rounded-3xl p-10 min-h-[150px]"
      >
        <img
          src={pic}
          className="bg-slate-300 S500:w-full S500:h-[270px] S500:mb-5 S500:m-0 object-cover rounded-tl-3xl rounded-br-3xl w-[220px] mr-5 h-[235px] S1120:h-[200px]"
        />
        <div className="flex-1">
          <p className="text-gray-500 font-medium S500:text-[12px]">
            SOFTWARE ENGINEER
          </p>
          <p className="font-semibold text-[40px] leading-10 S500:text-[25px]">
            Okoro Franklin.
          </p>
          <span className="text-[12px] leading-3 text-gray-500">
            I am a Software engineer based in Lagos, Nigeria.
          </span>
        </div>
        <FaHandPointer className="absolute S500:bottom-14 text-[35px] S1120:text-[25px] bottom-7 right-7 cursor-pointer text-slate-500 group-hover:text-white duration-500" />
      </Link>
    </>
  );
};

export default Intro;
