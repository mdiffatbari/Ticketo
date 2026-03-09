import { CiCalendarDate } from "react-icons/ci";
import { toast } from "react-toastify";

const Ticket = ({ singleTask, handleAddTask }) => {

  const { id, title, description, customer, priority, createdAt, status } = singleTask;

  // priority color
  const priorityColor =
    priority === "High"
      ? "text-red-500"
      : priority === "Medium"
      ? "text-amber-500"
      : "text-green-600";

  // status style
  const statusStyle =
    status === "In-Progress"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  const statusDot =
    status === "In-Progress"
      ? "bg-yellow-500"
      : "bg-green-600";

  return (
    <div
      onClick={() => {
        if (status !== "In-Progress") {
          handleAddTask(singleTask);
          toast.success("Task Added In Progress");
        }
      }}
      className="bg-white rounded-xl shadow-sm p-5 cursor-pointer hover:shadow-md transition"
    >
      {/* Top */}
      <div className="flex justify-between items-start mb-2">

        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyle}`}
        >
          <span className={`w-2 h-2 rounded-full ${statusDot}`}></span>
          {status === "In-Progress" ? "In- Progress" : "Open"}
        </div>

      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">
        {description}
      </p>

      {/* Bottom */}
      <div className="flex justify-between items-center text-sm">

        <div className="flex gap-4 items-center">
          <span className="text-gray-500">#{id}</span>

          <span className={`font-semibold uppercase ${priorityColor}`}>
            {priority} Priority
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-500">

          <span>{customer}</span>

          <div className="flex items-center gap-1">
            <CiCalendarDate />
            <span>{createdAt}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Ticket;