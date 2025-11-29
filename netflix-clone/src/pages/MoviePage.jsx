import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { tmdb } from "../services/tmdb"

export default function MoviePage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const response = await tmdb.getMovieDetails(id)
        setMovie({ ...response.data, type: "movie" })
      } catch {
        const response = await tmdb.getSeriesDetails(id)
        setMovie({ ...response.data, type: "tv" })
      }
    }
    load()
  }, [id])

  if (!movie) return <div className="text-white p-12">A carregar...</div>

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const trailer = movie.videos?.results?.find(v => v.type === "Trailer")

  return (
    <div className="pt-20 container text-white">

      <div className="md:flex gap-8">

        <img src={poster} className="w-72 rounded shadow-xl" />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            {movie.title || movie.name}
          </h1>

          <p className="text-zinc-300">{movie.overview}</p>

          <p className="text-sm text-zinc-500">
            {movie.genres?.map(g => g.name).join(" • ")}
          </p>

          {trailer && (
            <iframe
              className="w-full aspect-video rounded"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              allowFullScreen
            />
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-3">Elenco</h2>
      <div className="flex gap-4 overflow-x-auto">
        {movie.credits?.cast?.slice(0, 12).map(actor => (
          <div key={actor.id} className="w-24 flex-shrink-0 text-center">
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              className="w-20 h-20 rounded-full object-cover mx-auto"
            />
            <div className="text-sm mt-1">{actor.name}</div>
            <div className="text-xs text-zinc-400">{actor.character}</div>
          </div>
        ))}
      </div>

    </div>
  )
}
