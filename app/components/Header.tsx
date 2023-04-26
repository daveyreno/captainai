import Image from 'next/image'

function Header() {
    return (
        <div className='flex justify-between p-4 text-white bg-slate-800'>

            <div className='flex gap-4 md:gap-6'>

                <div className='items-center hidden md:flex'>
                    <Image src='/logo.svg' width='140' height='25' />
                </div>

                <div className='flex items-center md:hidden'>
                    <Image src='/logo-sm.svg' width='36' height='25' />
                </div>

                <div className=''>
                    <div className='text-lg font-semibold'>Pablo Montana</div>
                    <div className='flex items-center gap-2 -mt-1 font-light'>
                        <div className='text-slate-400'>0400 123 321</div>
                        <div className='w-1 h-1 rounded-full bg-slate-400'></div>
                        <div className='text-slate-400'>lifeofpablo@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-12 h-12 transition duration-300 border-2 rounded-full cursor-pointer border-slate-700 hover:bg-slate-900 hover:border-slate-900'>
                <svg xmlns="http://www.w3.org/2000/svg" height='30' viewBox="0 0 24 24" id="bars"><path fill="#FFFFFF" d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
            </div>


        </div>
    )
}

export default Header