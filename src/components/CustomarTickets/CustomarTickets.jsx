import React, { use } from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../taskStatus/TaskStatus";
import ResolvedTasks from "../ResolvedTask/ResolvedTasks";

const CustomarTickets = ({ getTicketsData }) => {
  const data = use(getTicketsData);

  data.map((e) => {
    console.log(e);
  });

  return (
    <div className=" bg-[#eeeeee] w-full px-10 md:px-[80px] mb-10">
      <h1 className="text-2xl font-bold">Customar Tickets</h1>
      <div className="w-full flex gap-4">
        <div className="w-[80%] h-auto grid grid-cols-2 gap-4 mt-4 ">
          {data.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket}></Ticket>
          ))}
        </div>
        <div className="w-[20%]">
          <TaskStatus></TaskStatus>
          <ResolvedTasks></ResolvedTasks>
        </div>
      </div>
    </div>
  );
};

export default CustomarTickets;
