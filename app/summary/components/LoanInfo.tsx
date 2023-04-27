function LoanInfo() {
    return (
        <div className='bg-white border rounded-lg'>

            <div className='flex justify-between p-6'>

                <div className=''>
                    <p className="mb-2 text-xs tracking-wide uppercase text-slate-500">Loan Amount</p>
                    <p className='text-3xl font-bold tracking-tighter'>$687,000</p>
                </div>

                <div className=''>
                    <p className='flex justify-end text-xs tracking-wide uppercase text-slate-500'>LVR</p>
                    <p className='flex justify-end mt-2'>89%</p>
                </div>
            </div>

        </div>
    )
}

export default LoanInfo