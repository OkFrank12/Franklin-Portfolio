import { useState } from "react";
import { AiOutlineLink, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { sendMailToExcelAPI } from "../../api/MailAPI";
import Swal from "sweetalert2";

const ContactInfoScreen = () => {
  const data: {}[] = [
    {
      icon: <AiOutlineMail />,
      title: "MAIL US",
      text1: "cfoonyemmemme@gmail.com",
      text2: "excelwithfrank@gmail.com",
    },
    {
      icon: <AiOutlinePhone />,
      title: "CONTACT US",
      text1: "+234 9165812629",
      text2: "+234 9044633070",
    },
    {
      icon: <AiOutlineLink />,
      title: "LOCATION",
      text1: "29, Akpiri Street, Olodi",
      text2: "Apapa, Lagos.",
    },
  ];

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <main className="w-full min-h-[100vh] flex justify-center items-center">
        {/*Contact Details */}
        <section className="w-[80%] S1270:w-[90%] S980:flex-col S980:items-start pt-28 flex justify-between items-center h-full">
          <div data-aos="zoom-in" className="S980:mb-10">
            <div className="mb-10">CONTACT INFO</div>
            {data.map((props: any, idx: number) => {
              return (
                <div key={idx} className="flex mb-16">
                  <div className="w-[70px] text-[30px] flex justify-center items-center h-[70px] rounded-xl bg-[#1D1D1D]">
                    {props.icon}
                  </div>
                  <div className="ml-5">
                    <p className="text-gray-500">{props.title}</p>
                    <p className="text-[14px] S500:text-[12px]">
                      {props.text1}
                    </p>
                    <p className="text-[14px] S500:text-[12px]">
                      {props.text2}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="mb-10">SOCIAL INFO</div>
            <div className="flex">
              <a
                href="https://web.facebook.com/frank.leen.750"
                target="_blank"
                className="w-[70px] text-[30px] flex justify-center items-center h-[70px] rounded-full bg-[#1D1D1D] mr-5 cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/franklin-chidera-a39610282/"
                target="_blank"
                className="w-[70px] text-[30px] flex justify-center items-center h-[70px] rounded-full bg-[#1D1D1D] mr-5 cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/OkFrank12"
                target="_blank"
                className="w-[70px] text-[30px] flex justify-center items-center h-[70px] rounded-full bg-[#1D1D1D] mr-5 cursor-pointer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/*Contact Details */}
          <div
            data-aos="zoom-in"
            className="w-[65%] S980:w-full S500:bg-transparent S500:p-0 rounded-3xl p-10 h-full bg-[#1D1D1D]"
          >
            {loading && <div>Processing Request...</div>}

            <p className="font-medium text-[40px]">
              Let's Build <span className="text-[#5B78F6]">Together.</span>
            </p>
            {/* Name */}
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              className="w-full my-[10px] p-5 h-[60px] rounded-lg bg-[#262626] text-[13px]"
            />
            {/* Email */}
            <input
              type="text"
              placeholder="Email *"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              className="w-full my-[10px] p-5 h-[60px] rounded-lg bg-[#262626] text-[13px]"
            />
            {/* Your Subject */}
            <input
              type="text"
              placeholder="Your Subject *"
              value={subject}
              onChange={(e: any) => {
                setSubject(e.target.value);
              }}
              className="w-full my-[10px] p-5 h-[60px] rounded-lg bg-[#262626] text-[13px]"
            />
            {/* Your Message */}
            <textarea
              placeholder="Your Message *"
              value={message}
              onChange={(e: any) => {
                setMessage(e.target.value);
              }}
              className="w-full my-[10px] resize-none p-5 h-[145px] rounded-lg bg-[#262626] text-[13px]"
            />
            <div
              onClick={() => {
                setLoading(true);
                sendMailToExcelAPI({ name, email, subject, message }).then(
                  (res: any) => {
                    if (res) {
                      Swal.fire({
                        icon: "success",
                        title: "Mail has been sent to Excel",
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                      }).then(() => {
                        setLoading(false);
                      });
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Mail Sending Fatal",
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                      });
                    }
                  }
                );
              }}
              className="w-full flex justify-center cursor-pointer bg-[#323232] py-5 rounded-lg text-[13px] hover:text-slate-700 hover:bg-white duration-500 font-medium"
            >
              Send Message
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactInfoScreen;
