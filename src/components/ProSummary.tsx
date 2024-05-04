const ProSummary = () => {
  const anArrOfObj = [
    {
      num: "03",
      text: "YEARS EXPERIENCE",
    },
    {
      num: "+7",
      text: "CLIENTS WORLDWIDE",
    },
    {
      num: "+3",
      text: "REAL WORLD PROJECTS",
    },
  ];
  return (
    <>
      <div
        data-aos="zoom-in"
        className="flex S1120:h-[200px] S980:w-[90%] S980:m-0 S1120:w-[450px] w-[595px] mr-5 S1270:w-[515px] justify-between group S500:flex-col S500:min-h-[400px] items-center h-[250px] rounded-3xl bg-[#181818] cursor-pointer p-5"
      >
        {anArrOfObj.map(({ num, text }) => {
          return (
            <div className="w-[30%] S500:w-[90%] S500:my-[5px] h-full flex justify-center text-center items-center flex-col bg-[#222222] rounded-3xl">
              <p className="text-[35px] font-semibold">{num}</p>
              <p className="text-[15px] w-[70%] text-gray-500">{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProSummary;
