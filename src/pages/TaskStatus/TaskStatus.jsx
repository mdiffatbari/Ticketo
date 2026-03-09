import React from 'react';

const TaskStatus = () => {
    return (
        <div className='p-5'>
            <div className='mb-10'>
                <h1 className='font-semibold text-2xl mb-2'>Task Status</h1>
                <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
            </div>
            <div>
                <h1 className='font-semibold text-2xl mb-2'>Resolved Task</h1>
                <p className='text-[#627382]'>No resolved tasks yet.</p>
            </div>
        </div>
    );
};

export default TaskStatus;