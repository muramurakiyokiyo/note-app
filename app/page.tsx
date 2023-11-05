import Image from 'next/image'
import Link from 'next/link' //コレがないとエラー。動画では不要

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-40">
      <div className='text-center'>
        <h3 className='font-medinum text-5xl'>
          Hello There. This Is Note App
        </h3>
        <div className='mt-10 flex justify-center gap-6'>
          <Link href="/notes" className='bg-purple-500 px-6 py-4 rounded-lg text-white hover:bg-purple-700 duration-200'>
            Get Started
          </Link>
          <Link href="/notes" className='bg-blue-500 px-6 py-4 rounded-lg text-white hover:bg-blue-700 duration-200'>
            Note List
          </Link>
        </div>
      </div>
    </main>
  )
}
