import React from 'react'
import Image from 'next/image'


function SummaryPage() {
  return (
    <main>
      {/* HEADER */}
      <div className=''>
        <div className='flex gap-6 p-4 text-white bg-slate-800'>
          <Image src='/logo.svg' width='140' height='25' />
          <div className=''>
            <div className='text-lg font-semibold'>Pablo Montana</div>
            <div className='flex gap-2 font-light'>
              <div className=''>0400 000 000</div>
              <div className=''>lifeofpablo@gmail.com</div>
            </div>
          </div>
        </div>

        {/* SNAPSHOT */}
        <div className='flex items-center gap-3 p-3 text-sm font-bold tracking-wide border-b bg-slate-100 text-slate-800'>
          <div className='p-2 px-4 text-white bg-red-600 rounded-lg'>LOCKED</div>
          <div className=''>REFI 1</div>
          <div className=''>SEC 1</div>
          <div className='w-2 h-2 rounded-full bg-slate-300'></div>
          <div className=''>DEBT CON</div>
          <div className=''>RATE LOCK</div>
          <div className='w-2 h-2 rounded-full bg-slate-300'></div>
          <div className=''>LVR: <span className='font-normal'>89%</span></div>
        </div>
      </div>

      {/* MAIN MENU */}
      <div className='flex'>
        <div className='flex flex-col min-h-screen gap-1 p-3 tracking-wide bg-white border-r w-80'>


          <div className='flex items-center gap-2 p-3 rounded-lg bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="clipboard"><path fill="#%236563FF" d="M17,4H15.82A3,3,0,0,0,13,2H11A3,3,0,0,0,8.18,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7A3,3,0,0,0,17,4ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm8,14a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1a1,1,0,0,1,1,1Z"></path></svg>
            </div>
            <p className='font-semibold'>Summary</p>
          </div>


          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' data-name="Layer 1" viewBox="0 0 24 24" id="house-user"><path fill="#%236563FF" d="m21.664 10.252-9-8a.999.999 0 0 0-1.328 0l-9 8a1 1 0 0 0 1.328 1.496L4 11.449V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.551l.336.299a1 1 0 0 0 1.328-1.496ZM9.184 20a2.982 2.982 0 0 1 5.632 0Zm1.316-5.5A1.5 1.5 0 1 1 12 16a1.502 1.502 0 0 1-1.5-1.5ZM18 20h-1.101a5 5 0 0 0-2.259-3.228 3.468 3.468 0 0 0 .86-2.272 3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A5 5 0 0 0 7.1 20H6V9.671l6-5.333 6 5.333Z"></path></svg>
            </div>
            <p>Property</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="users-alt"><path fill="#%236563FF" d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"></path></svg>
            </div>
            <p>Applicants</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="usd-circle"><path fill="#%236563FF" d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"></path></svg>
            </div>
            <p>Income & Expenses</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="credit-card"><path fill="#%236563FF" d="M7,15h3a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2ZM19,5H5A3,3,0,0,0,2,8v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,12a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20Zm0-8H4V8A1,1,0,0,1,5,7H19a1,1,0,0,1,1,1Z"></path></svg>
            </div>
            <p>Assets & Liabilities</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="chart"><path fill="#%236563FF" d="M12,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6ZM7,12a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V13A1,1,0,0,0,7,12Zm10-2a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,17,10Zm2-8H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path></svg>
            </div>
            <p>Workshop your deal</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="list-ul"><path fill="#%236563FF" d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
            </div>
            <p>Needs & Objectives</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="crosshair"><path fill="#%236563FF" d="M21,11H19.93A8,8,0,0,0,13,4.07V3a1,1,0,0,0-2,0V4.07A8,8,0,0,0,4.07,11H3a1,1,0,0,0,0,2H4.07A8,8,0,0,0,11,19.93V21a1,1,0,0,0,2,0V19.93A8,8,0,0,0,19.93,13H21a1,1,0,0,0,0-2Zm-4,2h.91A6,6,0,0,1,13,17.91V17a1,1,0,0,0-2,0v.91A6,6,0,0,1,6.09,13H7a1,1,0,0,0,0-2H6.09A6,6,0,0,1,11,6.09V7a1,1,0,0,0,2,0V6.09A6,6,0,0,1,17.91,11H17a1,1,0,0,0,0,2Zm-5-2a1,1,0,1,0,1,1A1,1,0,0,0,12,11Z"></path></svg>
            </div>
            <p>Choose your loan</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' data-name="Layer 1" viewBox="0 0 24 24" id="calculator"><path fill="#%236563FF" d="M12.71,17.29a1,1,0,0,0-.16-.12.56.56,0,0,0-.17-.09.6.6,0,0,0-.19-.06.93.93,0,0,0-.57.06.9.9,0,0,0-.54.54A.84.84,0,0,0,11,18a1,1,0,0,0,.07.38,1.46,1.46,0,0,0,.22.33A1,1,0,0,0,12,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,13,18a1,1,0,0,0-.08-.38A1,1,0,0,0,12.71,17.29ZM8.55,13.17a.56.56,0,0,0-.17-.09A.6.6,0,0,0,8.19,13a.86.86,0,0,0-.39,0l-.18.06-.18.09-.15.12A1.05,1.05,0,0,0,7,14a1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21A1,1,0,0,0,9,14a1.05,1.05,0,0,0-.29-.71Zm.16,4.12a1,1,0,0,0-.33-.21A1,1,0,0,0,7.8,17l-.18.06a.76.76,0,0,0-.18.09,1.58,1.58,0,0,0-.15.12,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,8,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,8.71,17.29Zm2.91-4.21a1,1,0,0,0-.33.21A1.05,1.05,0,0,0,11,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,13,14a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,11.62,13.08Zm5.09,4.21a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,16,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,16.71,17.29ZM16,5H8A1,1,0,0,0,7,6v4a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V6A1,1,0,0,0,16,5ZM15,9H9V7h6Zm3-8H6A3,3,0,0,0,3,4V20a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V4A3,3,0,0,0,18,1Zm1,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1Zm-2.45-6.83a.56.56,0,0,0-.17-.09.6.6,0,0,0-.19-.06.86.86,0,0,0-.39,0l-.18.06-.18.09-.15.12A1.05,1.05,0,0,0,15,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,17,14a1.05,1.05,0,0,0-.29-.71Z"></path></svg>
            </div>
            <p>Savings Calculator</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="exclamation-octagon"><path fill="#%236563FF" d="M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12,15Zm9.71-7.44L16.44,2.29A1.05,1.05,0,0,0,15.73,2H8.27a1.05,1.05,0,0,0-.71.29L2.29,7.56A1.05,1.05,0,0,0,2,8.27v7.46a1.05,1.05,0,0,0,.29.71l5.27,5.27a1.05,1.05,0,0,0,.71.29h7.46a1.05,1.05,0,0,0,.71-.29l5.27-5.27a1.05,1.05,0,0,0,.29-.71V8.27A1.05,1.05,0,0,0,21.71,7.56ZM20,15.31,15.31,20H8.69L4,15.31V8.69L8.69,4h6.62L20,8.69Z"></path></svg>
            </div>
            <p>Required actions</p>
          </div>

          <div className='flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
            <div className='flex justify-center w-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 24 24" id="file-check"><path fill="#%236563FF" d="M20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3.71-6.71L11,15.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4a1,1,0,0,0-1.42-1.42Z"></path></svg>
            </div>
            <p>Required documents</p>
          </div>

        </div>

        {/* CONTENT */}
        <div className='w-full p-8'>
          <div className='p-4 bg-white border rounded-xl h-36'>Where the magic happens</div>
        </div>

        {/* SEC MENU */}
        <div className='flex flex-col gap-4 p-3 bg-white border-l'>
          <div className='w-12 h-12 rounded-full bg-slate-100'></div>
          <div className='w-12 h-12 rounded-full bg-slate-100'></div>
          <div className='w-12 h-12 rounded-full bg-slate-100'></div>
        </div>
      </div>
    </main>

  )
}

export default SummaryPage