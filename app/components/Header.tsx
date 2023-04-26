import Image from 'next/image'

function Header() {
    return (
        <div className='flex justify-between p-5 text-white md:p-4 animate-gradient-x bg-gradient-to-r from-slate-800 via-teal-700 to-blue-600'>

            <div className='flex gap-4 md:gap-6'>

                <div className='items-center hidden md:flex'>
                    <Image alt='Lendi Logo' src='/logo.svg' width='140' height='25' />
                </div>

                <div className='flex items-center md:hidden'>
                    <Image alt='Lendi Logo' src='/logo-sm.svg' width='36' height='25' />
                </div>

                <div className=''>
                    <div className='text-lg font-semibold'>Pablo Montana</div>
                    <div className='flex items-center gap-2 -mt-1 font-light'>
                        <div className='cursor-pointer text-slate-300 hover:text-teal-500'>0400 123 321</div>
                        <div className='w-1 h-1 rounded-full bg-slate-400'></div>
                        <div className='cursor-pointer text-slate-300 hover:text-teal-500'>lifeofpablo@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-12 h-12 transition duration-300 border-2 border-white rounded-full cursor-pointer hover:bg-slate-900 hover:border-slate-900'>
                <svg xmlns="http://www.w3.org/2000/svg" height='30' viewBox="0 0 24 24" id="bars"><path fill="#FFFFFF" d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
            </div>


        </div>
    )
}

export default Header