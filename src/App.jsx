import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TopCards from "./components/TopCards/TopCards";
import TaskStatus from "./pages/TaskStatus/TaskStatus";
import Tickets from "./pages/Tickets/Tickets";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [tickets, setTickets] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [resolved, setResolved] = useState([])

  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  const handleAddTask = (ticket) => {

    setInProgress([...inProgress, ticket])

    const remaining = tickets.filter(t => t.id !== ticket.id)
    setTickets(remaining)
  }

  const handleCompleteTask = (ticket) => {

    const remaining = inProgress.filter(t => t.id !== ticket.id)

    setInProgress(remaining)
    setResolved([...resolved, ticket])
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#f5f5f5]">

        <TopCards
          inProgressCount={inProgress.length}
          resolvedCount={resolved.length}
        />

        <div className="flex w-11/12 mx-auto gap-4">
          <div className="md:w-[70%]">
            <Tickets
              tickets={tickets}
              handleAddTask={handleAddTask}
            />
          </div>

          <div className="md:w-[30%]">
            <TaskStatus
              inProgress={inProgress}
              resolved={resolved}
              handleCompleteTask={handleCompleteTask}
            />
          </div>
        </div>

      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;