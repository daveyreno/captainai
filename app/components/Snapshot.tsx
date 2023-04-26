import React from 'react'

function Snapshot() {
    return (
        <div className='flex items-center hidden gap-3 p-3 text-sm font-bold tracking-wide border-b bg-slate-100 text-slate-800 md:flex'>
            <div className='p-2 px-4 text-white bg-red-600 rounded-lg'>LOCKED</div>
            <div className=''>REFI 1</div>
            <div className=''>SEC 1</div>
            <div className='w-2 h-2 rounded-full bg-slate-300'></div>
            <div className=''>DEBT CON</div>
            <div className=''>RATE LOCK</div>
            <div className='w-2 h-2 rounded-full bg-slate-300'></div>
            <div className=''>LVR: <span className='font-normal'>89%</span></div>
        </div>
    )
}

export default Snapshot