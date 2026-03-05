import React, { useEffect, useState } from "react";

const Ticket = ({ updateCounts }) => {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  // Update parent component when counts change
  useEffect(() => {
    updateCounts(taskStatus.length, resolved.length);
  }, [taskStatus.length, resolved.length, updateCounts]);

  const handleTicketClick = (ticket) => {
    if (!taskStatus.find((t) => t.ID === ticket.ID)) {
      setTaskStatus((prev) => [...prev, ticket]);

      setTickets((prev) =>
        prev.map((t) =>
          t.ID === ticket.ID ? { ...t, status: "In-Progress" } : t,
        ),
      );
    }
  };

  const handleComplete = (ticket) => {
    setTaskStatus((prev) => prev.filter((t) => t.ID !== ticket.ID));
    setResolved((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.ID !== ticket.ID));
  };

  return (
    <div className="lg:flex gap-6 px-[4%] pb-16">
      {/* Customer Tickets */}
      <div className="lg:w-[73%]">
        <h2 className="text-2xl font-semibold text-[#34485A] mb-4">
          Customer Tickets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.ID}
              onClick={() => handleTicketClick(ticket)}
              className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:shadow-md transition"
            >
              {/* Title + Status */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-[18px] font-semibold text-[#001931]">
                  {ticket.Title}
                </h3>

                <span
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    ticket.status === "In-Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      ticket.status === "In-Progress"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  ></span>
                  {ticket.status || "Open"}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#627382] text-base mb-6 leading-relaxed">
                {ticket.Description}
              </p>

              {/* Bottom Row */}
              <div className="flex justify-between items-center text-gray-500">
                <div className="flex items-center gap-6">
                  <span className="text-[#627382] font-medium">
                    #{ticket.ID}
                  </span>

                  <span
                    className={`font-medium ${
                      ticket.Priority === "HIGH"
                        ? "text-red-500"
                        : ticket.Priority === "MEDIUM"
                          ? "text-yellow-500"
                          : "text-green-500"
                    }`}
                  >
                    {ticket.Priority} PRIORITY
                  </span>
                </div>

                <div className="flex items-center gap-4 text-gray-500">
                  <span>{ticket.Customer}</span>

                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{ticket.Date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Status */}
      <div className="mt-8 lg:mt-0 lg:w-[27%]">
        <h2 className="text-2xl font-semibold text-[#34485A] mb-4">
          Task Status
        </h2>
        {taskStatus.length === 0 && (
          <p className="text-[16px] text-gray-400">
            Select a ticket to add to Task Status
          </p>
        )}

        <div className="bg-gray-100 rounded-lg space-y-3 my-4">
          {taskStatus.map((ticket) => (
            <div key={ticket.ID} className="bg-white rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-[#001931] ">
                  {ticket.Title}
                </span>
              </div>

              <button
                onClick={() => handleComplete(ticket)}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-[16px] font-semibold py-2 rounded"
              >
                Complete
              </button>
            </div>
          ))}
        </div>

        {/* Resolved */}
        <h2 className="text-2xl font-semibold text-[#34485A] mb-4 mt-10">
          Resolved Task
        </h2>

        <div className="bg-gray-100 rounded-lg space-y-3">
          {resolved.map((ticket) => (
            <div key={ticket.ID} className="bg-[#E0E7FF] p-5 rounded-md">
              <p className="text-lg font-medium text-[#001931]">
                {ticket.Title}
              </p>
            </div>
          ))}

          {resolved.length === 0 && (
            <p className="text-gray-400 text-[16px]">No resolved tasks yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
