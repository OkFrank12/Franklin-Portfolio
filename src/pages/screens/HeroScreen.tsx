import Intro from "../../components/Intro";
import Motto from "../../components/Motto";
import Credentials from "../../components/Credentials";
import Projects from "../../components/Projects";
import Blog from "../../components/Blog";
import Specialization from "../../components/Specialization";
import Profiles from "../../components/Profiles";
import ProSummary from "../../components/ProSummary";
import WorkTogether from "../../components/WorkTogether";

const HeroScreen = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center items-center ">
        <main className="w-[1220px] S980:w-full h-full pt-28">
          <div className="flex w-full S980:flex-col S980:items-center S1270:justify-center justify-between S768:min-h-[500px]">
            <Intro />
            <div className="w-[51.5%] S1120:w-[450px] S1270:w-[550px] min-h-[200px] S980:w-[90%]">
              <Motto />
              <div className="w-full S500:flex-col justify-between flex pt-5">
                <Credentials />
                <Projects />
              </div>
            </div>
          </div>
          <div className="flex w-full mt-5 S980:flex-wrap justify-center">
            <div className="hidden w-[90%] mb-5 S980:justify-center S980:items-center S980:flex">
              <Specialization />
            </div>
            <Blog />
            <div className="flex S980:hidden">
              <Specialization />
            </div>
            <Profiles />
          </div>
          <div className="flex w-full S980:flex-col S980:items-center mt-5 justify-center">
            <ProSummary />
            <WorkTogether />
          </div>
        </main>
      </div>
    </>
  );
};

export default HeroScreen;
