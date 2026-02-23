import React from "react";
import vectorBG1 from "../../assets/VectorBG1.png";
import vectorBG2 from "../../assets/VectorBG2.png";

const InProgress = () => {
  return (
    <div className="w-full rounded-md overflow-hidden relative ">
      <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>

      <img src={vectorBG1} className="absolute left-0 top-0 " alt="" />
      <img src={vectorBG2} className="absolute right-0 top-0 " alt="" />
      <div className="card bg-transparent relative text-white md:h-45 lg:h-[250px] flex justify-center items-center">
        <div className="card-body flex justify-center items-center ">
          <h3 className="card-title">In-Progress</h3>
          <h1 className="text-3xl">0</h1>
        </div>
      </div>
    </div>
  );
};

export default InProgress;
