import {
  MdDeveloperMode,
  MdDesignServices,
  MdOutlineDraw,
} from "react-icons/md";
import { BsMicrosoft } from "react-icons/bs";

const MyOfferingsScreen = () => {
  return (
    <>
      <main className="w-full min-h-[100vh] flex  justify-center items-center">
        <section className="w-[80%] S1120:w-[90%] S768:flex-col h-full flex justify-between pt-28">
          <div className="w-[30%] py-20 pl-10 pr-5 rounded-3xl flex flex-col justify-between  min-h-full bg-[#1B1B1B] S768:w-full S768:h-[200px] S768:p-5 S768:mb-5">
            <div className="flex items-center">
              <MdDeveloperMode size={30} />
              <span className="ml-5">WEB DEVELOPMENT</span>
            </div>
            <div className="flex items-center text-[18px]">
              <MdDesignServices size={30} />
              <span className="ml-5">GRAPHIC DESIGNS</span>
            </div>
            <div className="flex items-center text-[18px]">
              <MdOutlineDraw size={30} />
              <span className="ml-5">UI/UX DESIGNS</span>
            </div>
            <div className="flex items-center text-[18px]">
              <BsMicrosoft size={30} />
              <span className="ml-5">DESKTOP PUBLISHING</span>
            </div>
          </div>
          <div className="w-[68%] S768:w-full min-h-full flex flex-col justify-center bg-[#212121] p-5 rounded-3xl">
            <div className="w-full flex flex-wrap S1270:flex-col">
              <div className="w-[48%] S500:mb-2 S1270:w-full S1270:min-h-[50px] m-[1%] rounded-3xl p-5 min-h-[270px] bg-[#2D2D2D]">
                <p className="text-[#787878]">WEB DEVELOPMENT</p>
                <span className="leading-8 text-[13px]">
                  As a proficient MERN Stack Web Developer seamlessly merging
                  MongoDB, Express.js, React.js, and Node.js to create dynamic
                  and responsive web applications. My expertise lies in crafting
                  scalable and efficient solutions for users.
                </span>
              </div>
              <div className="w-[48%] S500:mb-2 S1270:w-full S1270:min-h-[50px] m-[1%] rounded-3xl p-5 min-h-[270px] bg-[#2D2D2D]">
                <p className="text-[#787878]">GRAPHIC DESIGN</p>
                <span className="leading-8 text-[13px]">
                  As a versatile Graphic Designer adeptly harnessing the
                  creative power of tools like CANVA and CorelDRAW to craft
                  visually stunning and impactful designs. Pushing the
                  boundaries of graphic communication to leave a lasting
                  impression.
                </span>
              </div>
            </div>
            <div className="w-full flex flex-wrap S1270:flex-col">
              <div className="w-[48%] S500:mb-2 S1270:w-full S1270:min-h-[50px] m-[1%] rounded-3xl p-5 min-h-[270px] bg-[#2D2D2D]">
                <p className="text-[#787878]">UI/UX DESIGNS</p>
                <span className="leading-8 text-[13px]">
                  A skilled UI/UX designer expertly navigating the design
                  landscape using Figma, with a proficiency in wireframing,
                  prototyping, and collaborative design within the Figma
                  platform thereby ensuring a user-centric and cohesive digital
                  experience.
                </span>
              </div>
              <div className="w-[48%] S500:mb-2 S1270:w-full S1270:min-h-[50px] m-[1%] rounded-3xl p-5 min-h-[270px] bg-[#2D2D2D]">
                <p className="text-[#787878]">DESKTOP PUBLISHING</p>
                <span className="leading-8 text-[13px]">
                  The creation and design of documents using specialized
                  software on a personal computer. Leveraging the use of
                  Microsoft Office Suite which are MS Word, MS Access, MS
                  Powerpoint and MS Excel.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyOfferingsScreen;
