import { useNavigate } from "react-router-dom"

export default function MovieCard({ item }) {
  const navigate = useNavigate()

  const imgSrc = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "/fallback.jpg"

  return (
    <div
      className="w-40 flex-shrink-0 rounded overflow-hidden bg-zinc-800 hover:scale-105 transition cursor-pointer"
      onClick={() => navigate(`/movie/${item.id}`)}
    >
      <img src={imgSrc} className="h-56 w-full object-cover" />
    </div>
  )
}
