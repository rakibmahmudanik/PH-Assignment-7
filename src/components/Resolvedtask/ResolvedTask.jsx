import React from "react";

const ResolvedTask = ({ resolvedTicketData }) => {
  console.log(resolvedTicketData);
  return (
    <div className=" card bg-[#E0E7FF] shadow-sm rounded-sm p-3 mb-3">
      <h1 className="my-1">{resolvedTicketData.title}</h1>
    </div>
  );
};

export default ResolvedTask;
