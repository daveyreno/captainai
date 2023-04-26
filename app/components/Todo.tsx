function Todo() {
    return (
        <div className='flex flex-col'>

            <div className='flex'>
                <div className='flex justify-center w-1/2 p-5 text-xs font-semibold tracking-widest uppercase transition duration-300 bg-white border-t border-l rounded-tl-lg cursor-pointer hover:text-teal-500'>Todo</div>
                <div className='flex justify-center w-1/2 p-5 text-xs font-semibold tracking-widest uppercase transition duration-300 border-l border-r rounded-tr-lg cursor-pointer bg-slate-100 hover:bg-white border-y hover:text-teal-500'>Complete</div>
            </div>

            {/* TABS */}
            <div className='flex justify-center gap-1 py-4 text-sm bg-white border-b border-x text-slate-500'>There are currently <span className='font-bold text-slate-800'>4 outstanding</span> items.</div>

            {/* START OF ITEMS */}
            <div className='flex gap-4 p-6 transition duration-300 bg-white border-b cursor-pointer border-x hover:bg-slate-100'>
                <svg id="exclamation-circle" width='20' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f97316" d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>

                <div className='flex items-center justify-between w-full'>
                    <div className=''>
                        <p className='text-xs tracking-wide uppercase text-slate-500'>Assets</p>
                        <p className='font-semibold'>John Jonesey</p>
                    </div>

                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height='20' viewBox="0 0 24 24" id="angle-right-b"><path fill="#%236563FF" d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path></svg>
                    </div>
                </div>

            </div>

            <div className='flex gap-4 p-6 transition duration-300 bg-white border-b cursor-pointer border-x hover:bg-slate-100'>
                <svg id="exclamation-circle" width='20' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f97316" d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>

                <div className='flex items-center justify-between w-full'>
                    <div className=''>
                        <p className='text-xs tracking-wide uppercase text-slate-500'>Income & Expenses</p>
                        <p className='font-semibold'>Mary McGarryface</p>
                    </div>

                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height='20' viewBox="0 0 24 24" id="angle-right-b"><path fill="#%236563FF" d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path></svg>
                    </div>
                </div>

            </div>

            <div className='flex gap-4 p-6 transition duration-300 bg-white border-b cursor-pointer border-x hover:bg-slate-100'>
                <svg id="exclamation-circle" width='20' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f97316" d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>

                <div className='flex items-center justify-between w-full'>
                    <div className=''>
                        <p className='text-xs tracking-wide uppercase text-slate-500'>ID Verification</p>
                        <p className='font-semibold'>John Jonesey</p>
                    </div>

                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height='20' viewBox="0 0 24 24" id="angle-right-b"><path fill="#%236563FF" d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path></svg>
                    </div>
                </div>

            </div>

            <div className='flex gap-4 p-6 transition duration-300 bg-white border-b rounded-b-lg cursor-pointer border-x hover:bg-slate-100'>
                <svg id="exclamation-circle" width='20' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f97316" d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>

                <div className='flex items-center justify-between w-full'>
                    <div className=''>
                        <p className='text-xs tracking-wide uppercase text-slate-500'>ID Verification</p>
                        <p className='font-semibold'>Fairline Yachts Pty Ltd</p>
                    </div>

                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height='20' viewBox="0 0 24 24" id="angle-right-b"><path fill="#%236563FF" d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path></svg>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Todo