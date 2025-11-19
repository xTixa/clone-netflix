export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-6 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-red-600 font-extrabold text-2xl tracking-wide">NETFLIX</span>
          <nav className="hidden md:flex gap-4 text-sm text-white/80">
            <a className="hover:text-white">Início</a>
            <a className="hover:text-white">Séries</a>
            <a className="hover:text-white">Filmes</a>
            <a className="hover:text-white">Bombando</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline bg-white text-black px-3 py-1 rounded">Entrar</button>
          <div className="w-8 h-8 bg-zinc-700 rounded-md" />
        </div>
      </div>
    </header>
  )
}
