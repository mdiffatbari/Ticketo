import Ticket from "../Ticket/Ticket"

const Tickets = ({ tickets, handleAddTask }) => {

  return (
    <div className="grid md:grid-cols-2 gap-5">

      {
        tickets.map(ticket => (
          <Ticket
            key={ticket.id}
            singleTask={ticket}
            handleAddTask={handleAddTask}
          />
        ))
      }

    </div>
  )
}

export default Tickets