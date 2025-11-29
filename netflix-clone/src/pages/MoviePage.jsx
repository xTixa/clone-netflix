import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { tmdb } from "../services/tmdb"

export default function MoviePage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [type, setType] = useState("movie")

  useEffect(() => {
    async function load() {
      try {
        const data = await tmdb.getMovieDetails(id)
        setMovie(data.data)
        setType("movie")
      } catch {
        const data = await tmdb.getSeriesDetails(id)
        setMovie(data.data)
        setType("tv")
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

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">
            {movie.title || movie.name}
          </h1>

          <p className="text-zinc-300">{movie.overview}</p>

          <p className="text-sm text-zinc-400">
            {movie.genres?.map(g => g.name).join(" • ")}
          </p>

          {trailer && (
            <iframe
              className="mt-4 w-full aspect-video rounded"
              src={`https://www.youtube.com/embed/${trailer.key}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}
