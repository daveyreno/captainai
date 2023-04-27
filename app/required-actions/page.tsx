function RequiredActionsPage() {
    return (

        <div className='flex justify-center'>
            <div className='flex flex-col max-w-6xl gap-4 p-6 md:p-8'>

                <div className='flex flex-col items-center md:flex-row md:justify-between'>
                    <h1 className='mb-6 text-4xl font-light'>Required Actions</h1>
                    <button className='w-full p-4 text-sm font-semibold tracking-widest text-white uppercase transition duration-300 bg-teal-500 rounded-lg lg:px-6 hover:bg-teal-600 md:w-fit'>Save</button>
                </div>

                {/* CONTENT AREA */}
                <div className='flex flex-col-reverse gap-4 md:flex-row'>

                    CONTENT AREA

                </div>

            </div>
        </div>

    )
}

export default RequiredActionsPage