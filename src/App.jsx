import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import TopCards from './components/TopCards/TopCards'
import TaskStatus from './pages/TaskStatus/TaskStatus'
import Tickets from './pages/Tickets/Tickets'

const taskData = fetch('./tickets.json')
  .then(res => res.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-[#f5f5f5]'>
        <TopCards></TopCards>
        <div className='flex w-11/12 mx-auto'>
          <div className='md:w-[70%]'>
            <Tickets taskData={taskData}></Tickets>
          </div>
          <div className='md:w-[30%]'>
            <TaskStatus></TaskStatus>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
