import { FaDotCircle } from "react-icons/fa";
import "../App.css";

const Motto = () => {
  return (
    <>
      <div
        data-aos="flip-up"
        className="w-full cursor-default border-gray-700 flex items-center border-l-[0.1px] border-t-[0.1px] bg-[#181818] h-[50px] text-[12px] p-5 rounded-full uppercase justify-center text-gray-500 relative overflow-hidden"
      >
        <p
          className="absolute items-center animate-marquee flex"
          style={{ whiteSpace: "nowrap" }}
        >
          Excelling in the world of technological advancement
          <FaDotCircle className="mx-3" />
          Excelling in the world of technological advancement.
          <FaDotCircle className="mx-3" />
        </p>
      </div>
    </>
  );
};

export default Motto;
