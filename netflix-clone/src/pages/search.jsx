import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import MovieCard from "../components/moviecard"
import { tmdb } from "../services/tmdb"

export default function Search() {
  const params = new URLSearchParams(useLocation().search)
  const q = params.get("q") || ""

  const [results, setResults] = useState([])

  useEffect(() => {
    async function load() {
      if (!q) return
      const response = await tmdb.search(q)
      setResults(response.data.results)
    }
    load()
  }, [q])

  return (
    <div className="pt-20 container text-white">

      <h1 className="text-2xl font-bold mb-4">
        Resultados para: <span className="text-red-500">{q}</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {results.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  )
}
