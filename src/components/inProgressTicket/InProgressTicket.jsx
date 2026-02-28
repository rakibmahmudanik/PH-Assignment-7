import React from "react";

const InProgressTicket = ({ progressTicketData, completeTask }) => {
  const handleComplete = () => {
    alert("completed");
    completeTask(progressTicketData);
  };

  return (
    <>
      <div className="card bg-white shadow-sm rounded-sm p-3 cursor-pointer mb-3 ">
        <h1 className="mb-3">{progressTicketData.title}</h1>
        <button
          onClick={() => handleComplete()}
          className="btn bg-[#02A53B] text-white"
        >
          Complete
        </button>
      </div>
    </>
  );
};

export default InProgressTicket;
