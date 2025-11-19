export default function MovieCard({ title }) {
  return (
    <div className="w-40 flex-shrink-0 rounded overflow-hidden bg-zinc-800 hover:scale-105 transform transition">
      <div className="h-56 bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-end p-2">
        <div className="text-xs text-white/90">{title}</div>
      </div>
    </div>
  )
}
