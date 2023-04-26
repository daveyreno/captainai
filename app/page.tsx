import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col h-screen justify-center items-center'>
        <h1 className='text-8xl tracking-tighter font-extrabold mb-4'>CaptainAI</h1>
        <p className='text-2xl mb-8 text-slate-500'>Improving productivity and certainty.</p>
        <Link href='/summary'>
          <button className='bg-teal-600 text-white text-xl py-4 px-6 rounded hover:bg-teal-500'>Let's go</button>
        </Link>
      </div>
    </main>
  )
}
