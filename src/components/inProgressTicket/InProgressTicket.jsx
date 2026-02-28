import React from "react";
import { toast } from "react-toastify";

const InProgressTicket = ({
  progressTicketData,
  completeTask,
  handleMainTickets,
}) => {
  const handleComplete = () => {
    toast.success(`Completed`);
    completeTask(progressTicketData);
    handleMainTickets(progressTicketData);
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
