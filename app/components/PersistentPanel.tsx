import React from 'react'

function PersistentNav() {
    return (
        <div className='hidden p-4 bg-white border-l md:block'>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-center w-12 h-12 transition duration-300 rounded-full cursor-pointer hover:bg-slate-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='24' viewBox="0 0 24 24" id="calender"><path fill="#%236563FF" d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></svg>
                </div>
                <div className='flex items-center justify-center w-12 h-12 transition duration-300 rounded-full cursor-pointer hover:bg-slate-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='24' viewBox="0 0 24 24" id="comment"><path fill="#%236563FF" d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
                </div>
                <div className='flex items-center justify-center w-12 h-12 transition duration-300 rounded-full cursor-pointer hover:bg-slate-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='24' viewBox="0 0 24 24" id="edit-alt"><path fill="#%236563FF" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
                </div>
                <div className='flex items-center justify-center w-12 h-12 transition duration-300 rounded-full cursor-pointer hover:bg-slate-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='24' viewBox="0 0 24 24" id="mobile-android"><path fill="#%236563FF" d="M12.71,16.29l-.15-.12a.76.76,0,0,0-.18-.09L12.2,16a1,1,0,0,0-.91.27,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.31,1.46,1.46,0,0,0,.33-.22,1,1,0,0,0,.21-1.09A1,1,0,0,0,12.71,16.29ZM16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default PersistentNav