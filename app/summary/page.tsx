import React from 'react'
import Image from 'next/image'

function SummaryPage() {
  return (
    <main>
    {/* HEADER */}
    <div className=''>
      <div className='p-4 bg-slate-800 flex text-white gap-6'>
        <Image src='/logo.svg' width='140' height='25' />
        <div className=''>
          <div className='font-semibold text-lg'>Pablo Montana</div>
          <div className='flex font-light gap-2'>
            <div className=''>0400 000 000</div>
            <div className=''>lifeofpablo@gmail.com</div>
          </div>
        </div>
      </div>



      <div className='flex bg-slate-100 border-b border-slate-200 p-3 items-center gap-3 font-semibold text-slate-800'>
        <div className='p-2 px-4 bg-red-600 rounded-lg text-white'>LOCKED</div>
        <div className=''>REFI 1</div>
        <div className=''>SEC 1</div>
        <div className='bg-slate-300 h-2 w-2 rounded-full'></div>
        <div className=''>DEBT CON</div>
        <div className=''>RATE LOCK</div>
        <div className='bg-slate-300 h-2 w-2 rounded-full'></div>
        <div className=''>LVR: 89%</div>
      </div>
    </div>


    {/* MAIN MENU */}
    <div className='flex'>
      <div className='w-56 p-6 border-r bg-white  min-h-screen'>
        <div className=''>Summary</div>
        <div className=''>Property</div>
        <div className=''>Applicants</div>
        <div className=''>Income & Expenses</div>
        <div className=''>Assets & Liabilities</div>
        <div className=''>Workshop your deal</div>
        <div className=''>Needs & Objectives</div>
        <div className=''>Choose your loan</div>
        <div className=''>Savings calculator</div>
        <div className=''>Required actions</div>
        <div className=''>Required documents</div>
      </div>



      {/* CONTENT */}
      <div className='w-full'>CONTENT</div>


      {/* SEC MENU */}
      <div className='bg-white border-l'>RIGHT PANEL</div>
    </div>
    </main>

  )
}

export default SummaryPage