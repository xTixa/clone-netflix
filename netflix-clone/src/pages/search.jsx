import { useLocation } from "react-router-dom"
import MovieCard from "../components/moviecard"
import sampleRows from "../data/media"

export default function Search() {
  const params = new URLSearchParams(useLocation().search)
  const q = params.get("q")?.toLowerCase() || ""

  const all = [
    ...sampleRows[0].items,
    ...sampleRows[1].items
  ]

  const results = all.filter(item =>
    item.title.toLowerCase().includes(q)
  )

  return (
    <div className="pt-20 container text-white">
      <h1 className="text-2xl font-bold mb-4">
        Resultados para: <span className="text-red-500">{q}</span>
      </h1>

      {results.length === 0 && <p className="text-zinc-500">Nenhum resultado encontrado.</p>}

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {results.map(r => (
          <MovieCard key={r.id} item={r} />
        ))}
      </div>
    </div>
  )
}
