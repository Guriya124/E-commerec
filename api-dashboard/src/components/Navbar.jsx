import { SearchIcon } from "lucide-react";


export default function Navbar() {
  return (
    <nav className=" sticky top-0 right-0  flex items-center justify-between p-2 border-b">

      <div className="flex items-center relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
        <input type="search" placeholder="Search.." className="flex-1 border h-10 p-2 pl-10 border-zinc-200 rounded-md text-sm leading-normal font-normal bg-white placeholder:text-zinc-400 focus:outline-zinc-900" />
      </div>

      <div>
        
        {/*profile  */}
        <div className="flex items-center gap-3 justify-start text-start p-1 border rounded-lg">
          <span className="rounded-full flex items-center justify-center bg-slate-700 leading-none font-medium text-white h-8 w-8 flex-shrink text-base">
            AD
          </span>
          <span>
            <p className="text-sm leading-none font-bold">Admin</p>
            <span className="text-sm leading-none">admin@mail.com</span>
          </span>
        </div>
      </div>

    </nav>
  )
}
