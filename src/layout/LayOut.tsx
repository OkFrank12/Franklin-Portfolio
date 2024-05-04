import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const LayOut = () => {
  return (
    <>
      <div className={`bg-[#0F0F0F] w-full min-h-[100vh] text-white`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LayOut;
