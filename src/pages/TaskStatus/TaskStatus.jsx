import { toast } from "react-toastify";

const TaskStatus = ({ inProgress, resolved, handleCompleteTask }) => {

  return (
    <div className="p-5">

      <div className="mb-10">

        <h1 className="font-semibold text-2xl mb-3">
          Task Status
        </h1>

        {inProgress.length === 0 && (
          <p className="text-[#627382]">
            Select a ticket to add to Task Status
          </p>
        )}

        {inProgress.map(task => (

          <div
            key={task.id}
            className="bg-white p-5 rounded mb-3"
          >

            <p className="text-[20px] font-semibold">
              {task.title}
            </p>

            <button
              onClick={() => {
                handleCompleteTask(task);
                toast.success("Task Completed!");
              }}
              className="btn bg-[#02A53B] text-white text-[15px] py-3 mt-2 btn-sm w-full"
            >
              Complete
            </button>

          </div>

        ))}

      </div>

      <div>

        <h1 className="font-semibold text-2xl mb-3">
          Resolved Task
        </h1>

        {resolved.length === 0 && (
          <p className="text-[#627382]">
            No resolved tasks yet.
          </p>
        )}

        {resolved.map(task => (
          <p
            key={task.id}
            className="mb-2 bg-[#E0E7FF] text-[20px] font-semibold shadow-sm p-5 rounded-lg"
          >
            {task.title}
          </p>
        ))}

      </div>

    </div>
  );
};

export default TaskStatus;