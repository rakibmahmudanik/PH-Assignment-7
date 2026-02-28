import React from "react";
import InProgress from "../In-progress/InProgress";
import Resolved from "../Resolved/Resolved";

const BannerCards = ({ inProgress, resolvedtasks }) => {
  return (
    <>
      <div className=" bg-[#eeeeee] flex gap-4 w-full p-10 md:p-[80px]">
        <InProgress inProgress={inProgress.length}></InProgress>
        <Resolved resolvedtasks={resolvedtasks}></Resolved>
      </div>
    </>
  );
};

export default BannerCards;
