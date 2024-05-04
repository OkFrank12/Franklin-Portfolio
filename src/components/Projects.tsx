import { FaHandPointer } from "react-icons/fa6";
import project from "../assets/Preview.jpg";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <Link
        to={`/all-projects`}
        onClick={() => window.scrollTo(0, 0)}
        data-aos="zoom-in"
        className={`flex w-[48%] S500:w-full S500:mt-5 S1120:h-[201px] justify-between group items-center flex-col h-[250px] rounded-3xl bg-[#181818] cursor-pointer p-5`}
      >
        <div className="w-[80%] h-[70%] flex justify-center items-center ">
          <img
            src={project}
            className="w-full S1120:w-[80%] object-cover h-full S1120:h-[80%] rounded-md"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <p className="text-[14.5px] text-slate-500 uppercase S1120:text-[12px]">
              showcase
            </p>
            <p className="font-medium text-[23px] capitalize">projects</p>
          </div>
          <FaHandPointer className="cursor-pointer text-[35px] S1120:text-[25px] text-slate-500 group-hover:text-white duration-500" />
        </div>
      </Link>
    </>
  );
};

export default Projects;
