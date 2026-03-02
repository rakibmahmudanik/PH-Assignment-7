import React, { use } from "react";
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

  const filteredTickets = data.filter(
    (ticket) => !resolvedtasks.some((c) => c.id === ticket.id),
  );

  return (
    <div className=" bg-[#eeeeee] w-full px-10 md:px-20 pb-20">
      <h1 className="text-2xl font-bold">Customar Tickets</h1>
      <div className="w-full flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full  md:w-[60%] lg:w-[75%] h-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 ">
          {filteredTickets.length === 0
            ? "No tickets are available!"
            : filteredTickets.map((ticket) => (
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
          ></TaskStatus>
          <ResolvedTasks resolvedtasks={resolvedtasks}></ResolvedTasks>
        </div>
      </div>
    </div>
  );
};

export default CustomarTickets;
