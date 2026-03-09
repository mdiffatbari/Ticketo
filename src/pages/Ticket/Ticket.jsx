import React from 'react';
import { CiCalendarDate } from "react-icons/ci";

const Ticket = ({singleTask}) => {
    return (
        <div>
            <div className="card shadow-lg p-10">
                <div className='flex justify-between items-center'>
                    <h1 className='text-[20px] font-semibold mb-2'>{singleTask.title}</h1>
                    <button className="btn btn-soft btn-accent">Accent</button>
                </div>
                <p>{singleTask.description}</p>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex gap-3'>
                        <h1>#{singleTask.id}</h1>
                        <h2>{singleTask.priority} Priority</h2>
                    </div>
                    <div className='flex justify-between gap-3'>
                        <p>jhon smith</p>
                        <div className='flex items-center'>
                            <CiCalendarDate />
                            <p>1/5/2152</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;