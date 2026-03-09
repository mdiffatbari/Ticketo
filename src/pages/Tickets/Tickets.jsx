import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({taskData}) => {
    const taskJson = use(taskData);
    console.log(taskJson)
    return (
        <div className=''>
            <h1 className='mb-3 text-2xl font-semibold'>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                taskJson.map(singleTask => <Ticket singleTask ={singleTask}></Ticket>)
            }
            </div>
        </div>
    );
};

export default Tickets;