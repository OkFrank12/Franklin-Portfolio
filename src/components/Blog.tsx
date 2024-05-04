import { FaHandPointer } from "react-icons/fa6";
import project from "../assets/WhatsApp Image 2023-10-31 at 11.58.25 AM (1).jpeg";
const Blog = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        className={`flex w-[300px] S980:w-[45%] S980:m-0 S1120:w-[220px] S500:w-[90%] S500:mb-5 mr-5 S1270:w-[260px] justify-between group items-center flex-col h-[250px] S1120:h-[200px] rounded-3xl bg-[#181818] cursor-pointer p-5`}
      >
        <div className="w-[80%] h-[70%] S1120:h-[60%] flex justify-center items-center ">
          <img
            src={project}
            className="w-full object-cover h-full rounded-md"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <p className="text-[14.5px] text-slate-500 uppercase S1120:text-[12px]">
              blog
            </p>
            <p className="font-medium text-[23px] capitalize">iExcel</p>
          </div>
          <FaHandPointer className="cursor-pointer text-[35px] S1120:text-[25px] text-slate-500 group-hover:text-white duration-500" />
        </div>
      </div>
    </>
  );
};

export default Blog;
