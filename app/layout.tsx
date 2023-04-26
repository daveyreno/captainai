import './globals.css'
import SideNav from './components/SideNav'
import Snapshot from './components/Snapshot'
import PersistentPanel from './components/PersistentPanel'
import Header from './components/Header'


export const metadata = {
  title: 'AI Captain Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100'>
        <main>

          {/* HEADER */}
          <Header />
          <Snapshot />

          <div className='flex'>
            <SideNav />

            {/* CONTENT */}
            <div className='w-full'>
              {children}
            </div>

            {/* SEC MENU */}
            <PersistentPanel />

          </div>
        </main>
      </body>
    </html>
  )
}