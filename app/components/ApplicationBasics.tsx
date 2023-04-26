function ApplicationBasics() {
    return (
        <div className='bg-white border rounded-lg '>
            <div className='flex flex-row justify-between p-6 border-b'>

                <div className=''>
                    <p className="mb-2 text-xs tracking-wide uppercase text-slate-500">Application Name</p>
                    <p className='text-xl font-semibold'>Johns Dreamhome</p>
                </div>

                <div className=''>
                    <p className='p-2 px-3 text-xs font-semibold rounded-full bg-slate-100'>Pre-Submission</p>
                </div>

            </div>

            <div className='flex justify-between px-6 py-3 text-sm text-slate-500'>

                <p className=''>Updated 2 days ago</p>
                <p className=''>Created 6 days ago</p>

            </div>
        </div>
    )
}

export default ApplicationBasics