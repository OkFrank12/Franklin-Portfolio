import { TiStarburst } from "react-icons/ti";
import pix from "../../assets/WhatsApp Image 2023-12-01 at 6.11.24 AM.jpeg";
const AboutMeScreen = () => {
  const data: {}[] = [
    {
      date: "2022 - 2023",
      title: "Web Dev Instructor",
      company: "Ewebal Tech Institute",
    },
    {
      date: "2024",
      title: "Online Technician",
      company: "Top Grade Educational Institute",
    },
  ];
  const secondData: {}[] = [
    {
      date: "2017 - 2022",
      title: "Western African Examination Certificate (WAEC)",
      school: "Mavir Leaders College",
    },
  ];
  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center items-center ">
        <main className="w-[80%]  pt-28">
          {/*First Section*/}
          <section className="w-full S980:items-center flex S1130:flex-col">
            <div
              data-aos="zoom-in"
              className="rounded-3xl S768:w-[250px] S768:h-[250px] p-5 w-[380px] bg-[#171717] h-[370px]"
            >
              <img
                src={pix}
                className="object-cover rounded-3xl w-full h-full"
              />
            </div>
            <div className="flex-1 pl-5 S1130:p-0 justify-center items-center flex-col">
              <div
                data-aos="fade-in"
                className="flex mt-14 justify-center text-[70px] S1360:text-[50px] S1270:text-[30px] items-center"
              >
                <TiStarburst className="" />
                <p className="uppercase font-semibold S980:text-[30px] S500:text-[17px]">
                  Self-Summary
                </p>
                <TiStarburst className="" />
              </div>
              <div
                data-aos="zoom-in"
                className="rounded-3xl w-full bg-[#202020] p-5"
              >
                <p className="font-medium mt-10 text-[40px] S500:text-[25px]">
                  Okoro Franklin
                </p>
                <span className="S500:text-[12px]">
                  I am a Lagos-based Full Stack Software Engineer, Web Tutor,
                  Freelancer and UI/UX Designer. Always a good team player and
                  ready to learn with a passion for Product Scalability. Capable
                  of building projects with the use of MERN.
                </span>
              </div>
            </div>
          </section>
          {/*Second Section*/}
          <section className="w-full mt-5 flex justify-center S980:flex-col">
            <div
              data-aos="slide-up"
              className="p-5 S980:w-full S980:mr-0 mr-5 rounded-3xl bg-[#1E1E1E] w-[50%] min-h-[100px]"
            >
              <p className="font-medium text-[20px]">EXPERIENCE</p>
              {data?.map(({ date, title, company }: any, idx) => (
                <div key={idx}>
                  <p className="text-[15px] text-gray-500 font-semibold mt-5">
                    {date}
                  </p>
                  <p className="font-medium  text-[20px]">{title}</p>
                  <span className="text-[12px] text-gray-500">{company}</span>
                </div>
              ))}
            </div>
            <div
              data-aos="slide-down"
              className="p-5 bg-[#151515] rounded-3xl S980:mt-5 S980:w-full w-[50%] min-h-[300px]"
            >
              <p className="font-medium text-[20px]">EDUCATION</p>
              {secondData?.map(({ date, title, school }: any, idx) => (
                <div key={idx}>
                  <p className="text-[15px] text-gray-500 font-semibold mt-5">
                    {date}
                  </p>
                  <p className="font-medium  text-[20px]">{title}</p>
                  <span className="text-[12px] text-gray-500">{school}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutMeScreen;
