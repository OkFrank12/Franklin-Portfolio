import { AiOutlineLinkedin } from "react-icons/ai";
import profileImg from "../../assets/WhatsApp Image 2023-12-01 at 6.11.24 AM.jpeg";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../../assets/coreldrawlogo.png";
import img2 from "../../assets/csslogo.png";
import img3 from "../../assets/expressjslogo.png";
import img4 from "../../assets/figmalogo.png";
import img5 from "../../assets/htmllogo.png";
import img6 from "../../assets/jotailogo.png";
import img7 from "../../assets/jslogo.png";
import img8 from "../../assets/mongodblogo.png";
import img9 from "../../assets/nodejslogo.png";
import img10 from "../../assets/reactlogo.png";
import img11 from "../../assets/reduxlogo.png";
import img12 from "../../assets/styled-componentlogo.png";
import img13 from "../../assets/tailwindcsslogo.png";
import img14 from "../../assets/typescript.png";

const MoreCredentialsScreen = () => {
  return (
    <>
      <main className="w-full min-h-[100vh] flex  justify-center items-center">
        <section className="w-[1000px] S1120:w-[90%] S768:flex-col h-full flex justify-between pt-28">
          {/*Short Profile Section */}
          <div>
            <div
              data-aos="zoom-in"
              className={`bg-[#1A1A1A] mb-10 mr-10 flex flex-col items-center rounded-3xl p-7 w-[400px] min-h-[600px] S768:w-full`}
            >
              <img
                src={profileImg}
                alt="image goes here"
                className="w-full S500:h-[300px] S400:h-[250px] object-cover S768:h-[400px] rounded-3xl h-[300px]"
              />
              <p className="font-medium mt-7 text-[25px]">Okoro Franklin</p>
              <p className="text-[#686868]">Sofware Developer</p>
              <div className="w-full flex justify-center S500:justify-between flex-wrap my-7">
                <a
                  href="https://www.linkedin.com/in/franklin-chidera-a39610282/"
                  target="_blank"
                  className="w-[50px] cursor-pointer h-[50px] flex justify-center items-center text-[20px] S500:m-0 mx-3 bg-[#313131] rounded-full"
                >
                  <AiOutlineLinkedin />
                </a>
                <a
                  href="https://web.facebook.com/frank.leen.750"
                  target="_blank"
                  className="w-[50px] cursor-pointer h-[50px] flex justify-center items-center text-[20px] S500:m-0 mx-3 bg-[#313131] rounded-full"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/Frankleen_Andy"
                  target="_blank"
                  className="w-[50px] cursor-pointer h-[50px] flex justify-center items-center text-[20px] S500:m-0 mx-3 bg-[#313131] rounded-full"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/OkFrank12"
                  target="_blank"
                  className="w-[50px] cursor-pointer h-[50px] flex justify-center items-center text-[20px] S500:m-0 mx-3 bg-[#313131] rounded-full"
                >
                  <FaGithub />
                </a>
              </div>
              <Link
                to={`/contact-info`}
                onClick={() => window.scrollTo(0, 0)}
                className="px-[88px] rounded-2xl S768:w-full flex justify-center hover:text-slate-700 hover:bg-white duration-500 S500:px-[20px] font-medium bg-[#323232] py-3"
              >
                Contact Me
              </Link>
            </div>
          </div>
          {/*Detailed Profile Section */}
          <div className="w-[60%] S768:w-full">
            <>
              <p
                data-aos="fade-in"
                className="uppercase font-medium mb-10 text-[20px]"
              >
                about me
              </p>
              <p data-aos="fade-in">
                As a MERN Stack Software Engineer, I specialize in developing
                dynamic web applications using MongoDB, Express.js, React, and
                Node.js. My focus is on creating seamless user interfaces with
                React and implementing efficient server-side logic with Node.js
                and Express.js. Proficient in designing and optimizing RESTful
                APIs, I leverage MongoDB for robust data storage and retrieval.
              </p>
              <br />
              <p data-aos="fade-in">
                As a versatile professional, I excel not only in MERN Stack
                development but also possess strong skills in graphic design and
                desktop publishing.
              </p>
              <br />
              <p data-aos="fade-in">
                This multidisciplinary approach allows me to offer comprehensive
                solutions, making me a valuable asset in diverse projects that
                require a blend of software engineering and design expertise.
              </p>
            </>
            <br />
            <br />
            <p
              data-aos="fade-in"
              className="uppercase font-medium mb-10 text-[20px]"
            >
              experience
            </p>
            {experienceData?.map((el: any) => {
              return (
                <>
                  <div data-aos="fade-in" className="">
                    <p className="text-gray-500">{el?.date}</p>
                    <p className="text-[#5B78F6] text-medium text-[20px]">
                      {el?.role}
                    </p>
                    <p className="text-[12px] text-gray-500">{el?.firm}</p>
                    <p>{el?.span}</p>
                  </div>
                  <br />
                </>
              );
            })}
            <br />
            <p
              data-aos="fade-in"
              className="uppercase font-medium mb-10 text-[20px]"
            >
              certifications
            </p>
            <div data-aos="fade-in" className="">
              <p className="text-gray-500">2017 - 2022</p>
              <p className="text-[#5B78F6] text-medium text-[20px]">
                West African Examination Council.
              </p>
              <p className="text-[12px] text-gray-500">
                Mavir Leaders College.
              </p>
              <p>
                I proudly graduated with the West African Examination
                Certification, showcasing my academic excellence and dedication
                to achieving educational milestones in the West African region.
                This accomplishment reflects my commitment to a rigorous and
                comprehensive curriculum, laying a solid foundation for future
                endeavors.
              </p>
              <p className="uppercase font-medium my-10 text-[20px]">skills</p>
              <div
                data-aos="fade-in"
                className="text-[25px] flex justify-center flex-wrap"
              >
                <img src={img1} className="w-[50px]" />
                <img src={img2} className="w-[50px]" />
                <img src={img3} className="w-[50px]" />
                <img src={img4} className="w-[50px]" />
                <img src={img5} className="w-[50px]" />
                <img src={img6} className="w-[50px]" />
                <img src={img7} className="w-[50px]" />
                <img src={img8} className="w-[50px]" />
                <img src={img9} className="w-[50px]" />
                <img src={img10} className="w-[50px]" />
                <img src={img11} className="w-[50px]" />
                <img src={img12} className="w-[50px]" />
                <img src={img13} className="w-[50px]" />
                <img src={img14} className="w-[50px]" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MoreCredentialsScreen;

const experienceData: {}[] = [
  {
    date: "2024",
    role: "Web Dev / UI-UX Instructor ",
    firm: "Ewebal Tech Institute",
    span: "I taught students at the educational services institute how to code and build real world projects. I also taught students interested in UI-UX how to design with Figma.",
  },
  {
    date: "2024",
    role: "Full Stack Web Developer",
    firm: "Ewebal SMS Solutions Nigeria",
    span: "I taught students at the educational services institute how to code and build real world projects. I also taught students interested in UI-UX how to design with Figma.",
  },
  {
    date: "2024",
    role: "Online Technician",
    firm: "Top Grade Educational Consultancy",
    span: "I built a web application that helps students get registered and buy forms from the tutorial services firm. They provide tutorial programs like JAMB, WAEC, NECO, GCE, e.t.c",
  },
];
