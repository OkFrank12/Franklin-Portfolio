import { Link } from "react-router-dom";
import Logo from "../static/Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    if (window.scrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", onShow);

  const [menu, setMenu] = useState<boolean>(false);
  const onMenuToggle = () => {
    setMenu(!menu);
  };

  return (
    <>
      {show ? (
        <header
          className={`w-full fixed z-50  bg-[rgba(0,0,0,0.8)] h-[70px] flex justify-center items-center`}
        >
          <main className="w-[80%] z-50  S1270:w-[90%] h-full flex justify-between items-center">
            <Logo />
            <section className="flex S768:hidden items-center">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/"
                className={`mx-3 text-gray-500  duration-500`}
              >
                Home
              </Link>
              <Link
                to="/self-summary"
                onClick={() => window.scrollTo(0, 0)}
                className={`mx-3 text-gray-500 hover:text-white duration-500`}
              >
                About
              </Link>
              <Link
                to="/all-projects"
                onClick={() => window.scrollTo(0, 0)}
                className={`mx-3 text-gray-500  hover:text-white duration-500`}
              >
                Works
              </Link>
              <Link
                to="/contact-info"
                onClick={() => window.scrollTo(0, 0)}
                className={`mx-3 text-gray-500  hover:text-white duration-500`}
              >
                Contact
              </Link>
            </section>
            {!menu ? (
              <AiOutlineMenu
                onClick={onMenuToggle}
                size={35}
                data-aos="slide-up"
                className="hidden S768:flex cursor-pointer"
              />
            ) : (
              <AiOutlineClose
                onClick={onMenuToggle}
                size={35}
                data-aos="slide-up"
                className="hidden S768:flex cursor-pointer"
              />
            )}
            {menu && (
              <div
                data-aos="slide-down"
                className="w-full justify-center flex-col items-center S768:flex hidden h-[200px] bg-[rgba(0,0,0,0.8)] absolute top-[70px] left-0"
              >
                <Link
                  to={`/`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  Home
                </Link>
                <Link
                  to={`/self-summary`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  About
                </Link>
                <Link
                  to={`/all-projects`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  Work
                </Link>
                <Link
                  to={`/contact-info`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  Contact
                </Link>
              </div>
            )}
            {/* {theme ? (
              <MdLightMode
                size={40}
                onClick={onHandleTheme}
                className="cursor-pointer"
              />
            ) : (
              <MdDarkMode
                size={40}
                onClick={onHandleTheme}
                className="cursor-pointer"
              />
            )} */}
          </main>
        </header>
      ) : (
        <header className="w-full fixed  z-50 h-[70px] flex justify-center items-center">
          <main className="w-[80%] z-50  S1270:w-[90%] h-full flex justify-between items-center">
            <Logo />
            <section className="flex S768:hidden items-center">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className={`mx-3 text-gray-500  hover:text-white duration-500`}
              >
                Home
              </Link>
              <Link
                to="/self-summary"
                onClick={() => window.scrollTo(0, 0)}
                className={`mx-3 text-gray-500  hover:text-white duration-500`}
              >
                About
              </Link>
              <Link
                to="/all-projects"
                onClick={() => window.scrollTo(0, 0)}
                className={`mx-3 text-gray-500  hover:text-white duration-500`}
              >
                Works
              </Link>
              <Link
                to="/contact-info"
                onClick={() => window.scrollTo(0, 0)}
                className={`mx-3 text-gray-500  hover:text-white duration-500`}
              >
                Contact
              </Link>
            </section>
            {!menu ? (
              <AiOutlineMenu
                onClick={onMenuToggle}
                size={35}
                data-aos="slide-up"
                className="hidden S768:flex cursor-pointer"
              />
            ) : (
              <AiOutlineClose
                onClick={onMenuToggle}
                size={35}
                data-aos="slide-up"
                className="hidden S768:flex cursor-pointer"
              />
            )}
            {menu && (
              <div
                data-aos="slide-down"
                className="w-full S768:flex justify-center items-center flex-col hidden h-[200px] bg-[#0F0F0F] absolute top-[70px] left-0"
              >
                <Link
                  to={`/`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  Home
                </Link>
                <Link
                  to={`/self-summary`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  About
                </Link>
                <Link
                  to={`/all-projects`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  Work
                </Link>
                <Link
                  to={`/contact-info`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-5"
                >
                  Contact
                </Link>
              </div>
            )}
            {/* {theme ? (
              <MdLightMode
                size={40}
                onClick={onHandleTheme}
                className="cursor-pointer"
              />
            ) : (
              <MdDarkMode
                size={40}
                onClick={onHandleTheme}
                className="cursor-pointer"
              />
            )} */}
          </main>
        </header>
      )}
    </>
  );
};

export default Header;
