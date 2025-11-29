import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  function search(e) {
    e.preventDefault()
    if (query.trim() !== "") navigate(`/search?q=${query}`)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-sm px-6 py-4">
      <div className="container flex items-center justify-between">

        {/* LOGO */}
        <div className="text-red-600 font-extrabold text-2xl tracking-wide cursor-pointer"
             onClick={() => navigate("/")}>
          NETFLIX
        </div>

        {/* SEARCH */}
        <form onSubmit={search} className="hidden sm:flex bg-zinc-800 rounded px-3 py-1">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </header>
  )
}
