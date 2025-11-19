export default function Banner() {
  return (
    <section className="relative h-[62vh] w-full bg-gradient-to-tr from-zinc-900 via-transparent to-zinc-900 flex items-end">
      <div className="absolute inset-0 bg-[url('/src/assets/hero.jpg')] bg-cover bg-center opacity-20" />
      <div className="container relative pb-12">
        <div className="max-w-[720px]">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Featured Series and Movies</h2>
          <p className="text-sm md:text-base text-white/80 mb-6">Watch anywhere. Start watching today.</p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold">
              ▶ Play
            </button>
            <button className="flex items-center gap-2 bg-zinc-700 text-white px-4 py-2 rounded-md font-semibold">
              + My List
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
