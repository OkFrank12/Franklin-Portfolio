import logo from "../assets/icon.png";
const Logo = () => {
  return (
    <>
      <div className="text-[40px] flex items-center font-semibold cursor-default">
        <img src={logo} className="w-[50px] mr-3" />
        Excel
      </div>
    </>
  );
};

export default Logo;
