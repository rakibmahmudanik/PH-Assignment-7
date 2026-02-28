import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const statusColors = {
  Open: "bg-[#B9F8CF] text-[#02A53B]",
  "In Progress": "bg-[#F8F3B9] text-[#FEBB0C]",
  Resolved: "bg-[#B9F8CF] text-[#02A53B]",
  Closed: "bg-[#B9F8CF] text-[#02A53B]",
  Selected: "bg-[#000] text-[#02A53B]",
};

const priorityColors = {
  "HIGH PRIORITY": " text-[#F83044]",
  "MEDIUM PRIORITY": "text-[#FEBB0C]",
  "LOW PRIORITY": "text-[#02A53B]",
};

const Ticket = ({ ticket, setInProgress, inProgress }) => {
  const [isselected, setIsSelected] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsSelected(true);
          setInProgress([...inProgress, ticket]);
          alert("Ticket Added");
        }}
        className={`card  bg-white shadow-sm rounded-sm p-3 cursor-pointer ${isselected ? " opacity-70 pointer-events-none grayscale" : ""}`}
      >
        <div className="flex justify-between items-center">
          <h3>{ticket.title}</h3>
          <button
            className={`btn  btn-sm rounded-full border-none
            ${isselected ? "bg-gray-200 text-gray-500" : statusColors[ticket.status]}`}
          >
            {isselected === true ? "Selected" : "● " + ticket.status}
          </button>
        </div>
        <p className="text-sm text-[#627382] my-3">
          {ticket.description.length > 150
            ? ticket.description.slice(0, 150) + "..."
            : ticket.description}
        </p>

        <div className="flex justify-between items-center text-sm">
          <div>
            <span className="pr-3 text-[#627382]">#100{ticket.id}</span>
            <span className={`${priorityColors[ticket.priority]}`}>
              {ticket.priority}
            </span>
          </div>
          <div>
            <span className="pr-3 text-[#627382]">{ticket.customer}</span>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <span className="ml-1">{ticket.createdAt.split("T", 1)}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
