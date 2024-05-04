import { TiStarburst } from "react-icons/ti";
import ewebalInt from "../../assets/eweballogistics.png";
import ewebalSms from "../../assets/ewebalsms.png";
import topgrade from "../../assets/topgrade.png";

const AllProjectsScreen = () => {
  return (
    <>
      <div className="w-full min-h-[80vh] flex  justify-center items-center ">
        <main className="w-[80%] pt-28 h-full S1120:w-[95%] ">
          <div
            data-aos="fade-in"
            className="flex justify-center mt-[5px] text-[70px] S1360:text-[50px] S1270:text-[30px] items-center w-full"
          >
            <TiStarburst className="" />
            <p className="uppercase font-semibold S980:text-[30px] S500:text-[17px]">
              All Projects
            </p>
            <TiStarburst className="" />
          </div>
          <div className="grid grid-cols-2 gap-2 S600:grid-cols-1">
            {projectsData?.map((props: any, idx: any) => (
              <a
                key={idx}
                className="w-full cursor-pointer S500:h-[300px] bg-[#1F1F1F] overflow-hidden h-[400px] rounded-3xl"
                href={props.href}
                target="_blank"
              >
                <img
                  src={props?.image}
                  className="w-full h-[330px] S500:h-[220px] object-cover"
                />
                <div className="m-2">
                  <p className="text-[#676767]">{props?.title}</p>
                  <p className="font-medium text-[20px]">{props?.span}</p>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default AllProjectsScreen;

const projectsData: any = [
  {
    image: ewebalInt,
    title: "WEB DEVELOPMENT",
    span: "Ewebal International.",
    href: "https://ewebalinternational.ng/",
  },
  {
    image: topgrade,
    title: "WEB DEVELOPMENT",
    span: "Top Grade Concepts.",
    href: "https://topgradeeduconcepts.ng/",
  },
  {
    image: ewebalSms,
    title: "WEB DEVELOPMENT",
    span: "Ewebal Sms Solutions",
    href: "https://ewebalsms.com/",
  },
];
