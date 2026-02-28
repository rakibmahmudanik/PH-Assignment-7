import React from "react";
import ResolvedTask from "../Resolvedtask/ResolvedTask";

const ResolvedTasks = ({ resolvedtasks }) => {
  return (
    <div className="my-3">
      <h1 className="text-2xl mb-2">Resolved Task</h1>
      <div className="">
        {resolvedtasks.length == 0
          ? "No resolved tasks yet."
          : resolvedtasks.map((resolvedTicketData) => (
              <ResolvedTask
                key={resolvedTicketData.id}
                resolvedTicketData={resolvedTicketData}
              ></ResolvedTask>
            ))}
      </div>
    </div>
  );
};

export default ResolvedTasks;
