import React from 'react';
import { CiCalendarDate } from "react-icons/ci";

const Ticket = () => {
    return (
        <div>
            <div className="card shadow-2xl p-10">
                <div>
                    <h1>Login Issues - Can't Access Account</h1>
                    <button>Open</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio laudantium iste commodi recusandae in minus quod modi unde omnis, a assumenda excepturi placeat aspernatur sed eaque, at, aperiam reiciendis nam. Dignissimos modi ratione aliquam ipsum qui commodi eius consectetur praesentium natus! Corporis nam nobis ipsa quos magnam, optio quas.</p>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex gap-3'>
                        <h1>#0001</h1>
                        <h2>High Priority</h2>
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