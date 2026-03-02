import React from "react";
import InProgressTicket from "../inProgressTicket/InProgressTicket";

const TaskStatus = ({ inProgress, completeTask }) => {
  return (
    <div className="my-3">
      <h1 className=" text-2xl mb-2">Task Status</h1>
      <div className="text-gray-500 text-sm">
        {inProgress.length == 0
          ? "Select a ticket to add to Task Status"
          : inProgress.map((progressTicketData) => (
              <InProgressTicket
                key={progressTicketData.id}
                progressTicketData={progressTicketData}
                completeTask={completeTask}
              ></InProgressTicket>
            ))}
      </div>
    </div>
  );
};

export default TaskStatus;
