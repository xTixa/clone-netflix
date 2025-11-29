import { useParams } from "react-router-dom"
import sampleRows from "../data/media"

export default function MoviePage() {
  const { id } = useParams()

  const all = [
    ...sampleRows[0].items,
    ...sampleRows[1].items
  ]

  const movie = all.find(m => m.id === id)

  if (!movie) return <div className="text-white p-12">Filme não encontrado.</div>

  return (
    <div className="pt-20 container text-white">
      <div className="md:flex gap-8">
        
        <img src={movie.poster} className="w-72 rounded shadow-xl" />

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-zinc-300">{movie.synopsis}</p>

          <p className="text-sm text-zinc-400">
            {movie.genres.join(" • ")} • {movie.runtime} min • ⭐ {movie.rating}
          </p>

          <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  )
}
