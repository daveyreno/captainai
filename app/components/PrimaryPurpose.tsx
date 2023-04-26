function PrimaryPurpose() {
    return (
        <div className='flex justify-between p-6 bg-white border rounded-lg'>

            <div className=''>
                <p className="mb-1 text-xs tracking-wide uppercase text-slate-500">Primary Purchase</p>
                <p className='text-lg font-semibold'>New Purchase</p>
            </div>

            <div className=''>
                <button className='px-3 py-2 text-xs font-semibold tracking-widest text-teal-500 uppercase transition duration-300 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white'>Edit Purpose</button>
            </div>

        </div>
    )
}

export default PrimaryPurpose