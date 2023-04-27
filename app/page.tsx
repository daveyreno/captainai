import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='mb-4 font-extrabold tracking-tighter text-8xl'>CaptainAI</h1>
        <p className='mb-8 text-2xl text-slate-500'>Improving productivity and reducing uncertainty.</p>
        <Link href='/summary'>
          <button className='px-6 py-4 text-xl text-white bg-teal-600 rounded hover:bg-teal-500'>Lets go</button>
        </Link>
      </div>
    </main>
  )
}
