export default function StartPage() {
  return (
    <main className="flex justify-center min-h-screen bg-gray-900 font-victormono">
      <div className="container flex justify-center min-w-[80%]">
        <div className="w-full flex flex-col md:flex-row my-auto text-center gap-x-14">
          <div className="grow py-2 rounded-md flex flex-col">
            <h1 className=" text-4xl font-bold text-stone-300 border-b-2 py-2">Blog</h1>
            <a href="https://www.codenewbie.org/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Code Newbie</a>

            <a href="https://dev.to/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Dev.to</a>

            <a href="https://hashnode.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Hashnode</a>

            <a href="https://medium.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Medium</a>
          </div>

          <div className="grow py-2 rounded-md flex flex-col">
            <h1 className=" text-4xl font-bold text-stone-300 border-b-2 py-2">Dev</h1>
            <a href="https://github.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">GitHub</a>

            <a href="https://www.heroku.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Heroku</a>

            <a href="https://www.hostinger.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Hostinger</a>


            <a href="https://vercel.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Vercel</a>
          </div>

          <div className="grow py-2 rounded-md flex flex-col">
            <h1 className=" text-4xl font-bold text-stone-300 border-b-2 py-2">Portfolio</h1>
            <a href="https://github.com/Somdobomk" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">GitHub</a>

            <a href="https://www.linkedin.com/in/davidzapicojr/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">LinkedIn</a>

            <a href="https://david.zapico.tech" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Portfolio</a>
          </div>

          <div className="grow py-2 rounded-md flex flex-col">
            <h1 className=" text-4xl font-bold text-stone-300 border-b-2 py-2">Social</h1>
            <a href="https://github.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">GitHub</a>

            <a href="https://www.heroku.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Heroku</a>

            <a href="https://vercel.com/" target="_blank" rel="noopener" className="text-xl py-2 px-2 w-full mx-2 cursor-pointer text-stone-300 hover:underline hover:decoration-red-400 hover:decoration-4 hover:rounded-lg hover:text-stone-100">Vercel</a>
          </div>
        </div>
      </div>
    </main>
  )
}