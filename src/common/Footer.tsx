import { FaCopyright } from "react-icons/fa6";
import Logo from "../static/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <main
        data-aos="fade-in"
        className="w-full min-h-[200px] text-[13px] flex-col py-20 flex justify-center items-center"
      >
        <Logo />
        <section className="flex my-10 uppercase items-center">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="mx-3 cursor-pointer text-gray-500 hover:text-white duration-500"
          >
            Home
          </Link>
          <Link
            to="/self-summary"
            onClick={() => window.scrollTo(0, 0)}
            className="mx-3 cursor-pointer text-gray-500 hover:text-white duration-500"
          >
            About
          </Link>
          <Link
            to="/all-projects"
            onClick={() => window.scrollTo(0, 0)}
            className="mx-3 cursor-pointer text-gray-500 hover:text-white duration-500"
          >
            Works
          </Link>
          <Link
            to="/contact-info"
            onClick={() => window.scrollTo(0, 0)}
            className="mx-3 cursor-pointer text-gray-500 hover:text-white duration-500"
          >
            Contact
          </Link>
        </section>
        <p className="flex text-gray-500 cursor-default items-center">
          <FaCopyright />
          <span className="ml-3">All Rights Reserved.</span>
        </p>
        <br />
        <br />
      </main>
    </>
  );
};

export default Footer;
