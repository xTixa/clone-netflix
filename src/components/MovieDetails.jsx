import React from 'react'

export default function MovieDetails({ movie, onClose }) {
  if (!movie) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 text-white max-w-5xl w-full mx-4 rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-4">
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              className="w-full rounded shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {movie.title} <span className="text-zinc-400 text-sm">({movie.year})</span>
                </h2>
                <div className="text-sm text-zinc-400 mt-1">
                  {movie.genres?.join(' • ')} • {movie.runtime} min • {movie.rating}/10
                </div>
              </div>
              <button onClick={onClose} className="ml-4 text-zinc-300 hover:text-white">Fechar ✕</button>
            </div>

            <div>
              <p className="text-zinc-200">{movie.synopsis}</p>
            </div>

            <div className="flex gap-3">
              <button className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700">Play</button>
              <button className="bg-zinc-700 px-4 py-2 rounded hover:bg-zinc-600">Minha Lista</button>
              <button className="bg-zinc-700 px-4 py-2 rounded hover:bg-zinc-600">Avaliar</button>
            </div>

            <div>
              <h3 className="font-semibold">Elenco</h3>
              <div className="flex gap-3 overflow-x-auto mt-2">
                {movie.cast?.slice(0, 8).map((c) => (
                  <div key={c.name} className="w-20 flex-shrink-0 text-center">
                    <img src={c.photo} alt={c.name} className="w-16 h-16 rounded-full mx-auto object-cover" loading="lazy" />
                    <div className="text-xs mt-1">{c.name}</div>
                    <div className="text-[10px] text-zinc-400">{c.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Trailer</h3>
              {movie.trailer ? (
                <div className="aspect-video mt-2">
                  <iframe
                    src={movie.trailer}
                    title="Trailer"
                    allowFullScreen
                    className="w-full h-full rounded"
                  />
                </div>
              ) : (
                <div className="text-zinc-400 mt-2">Trailer indisponível</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
