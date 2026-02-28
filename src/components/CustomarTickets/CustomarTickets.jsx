import React, { use, useState } from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../taskStatus/TaskStatus";
import ResolvedTasks from "../ResolvedTasks/ResolvedTasks";

const CustomarTickets = ({
  getTicketsData,
  setInProgress,
  inProgress,
  completeTask,
  resolvedtasks,
}) => {
  const data = use(getTicketsData);

  const [fillteredTicketsData, setFillteredTicketsData] = useState(data);

  const handleMainTickets = (task) => {
    const fillteredMainTicketsData = data.filter((ti) => ti.id !== task.id);
    setFillteredTicketsData(fillteredMainTicketsData);
  };

  return (
    <div className=" bg-[#eeeeee] w-full px-10 md:px-[80px] mb-10">
      <h1 className="text-2xl font-bold">Customar Tickets</h1>
      <div className="w-full flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full md:w-[60%] lg:w-[75%] h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 ">
          {fillteredTicketsData.map((ticket) => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              setInProgress={setInProgress}
              inProgress={inProgress}
            ></Ticket>
          ))}
        </div>
        <div className="md:w-[40%] lg:w-[25%]">
          <TaskStatus
            inProgress={inProgress}
            completeTask={completeTask}
            handleMainTickets={handleMainTickets}
          ></TaskStatus>
          <ResolvedTasks resolvedtasks={resolvedtasks}></ResolvedTasks>
        </div>
      </div>
    </div>
  );
};

export default CustomarTickets;
