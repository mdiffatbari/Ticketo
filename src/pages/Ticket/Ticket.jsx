import { CiCalendarDate } from "react-icons/ci";
import { toast } from "react-toastify";

const Ticket = ({ singleTask, handleAddTask }) => {

  return (
    <div
      onClick={() => {
        handleAddTask(singleTask)
        toast.success("Task Added In Progress")
      }}
      className="card shadow-lg p-6 cursor-pointer hover:shadow-xl"
    >

      <div className='flex justify-between items-center'>
        <h1 className='text-[20px] font-semibold mb-2'>
          {singleTask.title}
        </h1>

        <button className="btn btn-soft btn-accent">
          {singleTask.priority}
        </button>
      </div>

      <p>{singleTask.description}</p>

      <div className='flex justify-between items-center mt-4'>

        <div className='flex gap-3'>
          <h1>#{singleTask.id}</h1>
          <h2>{singleTask.priority} Priority</h2>
        </div>

        <div className='flex gap-3 items-center'>
          <p>{singleTask.customer}</p>

          <div className='flex items-center gap-1'>
            <CiCalendarDate />
            <p>{singleTask.createdAt}</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Ticket;