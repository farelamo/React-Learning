import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80")` }}>
        <nav id="nav" className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent">
          <div className="p-4">
            <div className="font-extrabold tracking-widest text-xl"><a href="#" className="transition duration-500 hover:text-indigo-500">React Learning</a></div>
          </div>
          <div className="p-4 hidden md:flex flex-row justify-between font-bold">
            <Link href={`/news`}>
              <p id="hide-after-click" className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">News</p>
            </Link>
            <Link href={`/blogs`}>
              <p className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Blogs</p>
            </Link>
            <Link href={`/comments`}>
              <p className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Comments</p>
            </Link>
            <Link href={`/users`}>
              <p className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Users</p>
            </Link>
            <Link href={`/category`}>
              <p className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Category</p>
            </Link>
          </div>
          <div id="nav-open" className="p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </div>
        </nav>
        <div id="nav-opened" className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10">
          <div className="p-2 divide-y divide-gray-600 flex flex-col">
            <Link href={`/news`}>
              <p id="hide-after-click" className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">News</p>
            </Link>
            <Link href={`/blogs`}>
              <p className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Blogs</p>
            </Link>
            <Link href={`/comments`}>
              <p className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Comments</p>
            </Link>
            <Link href={`/users`}>
              <p className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500">Users</p>
            </Link>
          </div>
        </div>
        <header id="up" className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
          <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div className="mx-2 text-center">
              <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">Hello, Selamat Belajar !</h1>
              <div className="inline-flex">
                <button className="mt-2 btn btn-primary">Let's Go</button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
