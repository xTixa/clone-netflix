export default function Banner() {
  return (
    <section className="relative h-[62vh] w-full overflow-hidden">

      {/* Imagem de fundo com animação */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomFade"
        style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}
      />

      {/* Camada de sombra */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Conteúdo */}
      <div className="relative container h-full flex flex-col justify-end pb-12 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          Featured Series and Movies
        </h2>

        <p className="text-sm md:text-base text-white/80 mb-6 animate-fadeIn delay-200">
          Watch anywhere. Start watching today.
        </p>

        <div className="flex gap-3 animate-fadeIn delay-300">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold">
            ▶ Play
          </button>
        </div>
      </div>
    </section>
  )
}
