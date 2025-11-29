import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import MovieCard from "../components/moviecard"
import Footer from "../components/footer"
import { tmdb } from "../services/tmdb"

export default function Home() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function load() {
      const [trending, popMovies, popSeries, topMovies, topSeries] = await Promise.all([
        tmdb.getTrending(),
        tmdb.getPopularMovies(),
        tmdb.getPopularSeries(),
        tmdb.getTopMovies(),
        tmdb.getTopSeries(),
      ])

      setRows([
        { title: "Trending Now", items: trending.data.results },
        { title: "Popular Movies", items: popMovies.data.results },
        { title: "Popular Series", items: popSeries.data.results },
        { title: "Top Rated Movies", items: topMovies.data.results },
        { title: "Top Rated Series", items: topSeries.data.results },
      ])
    }

    load()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <Navbar />

      <main className="pt-20">
        <Banner />

        <section className="container mt-8">
          {rows.map((row) => (
            <div key={row.title} className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{row.title}</h3>

              <div className="flex overflow-x-auto gap-3 scrollbar-hide">
                {row.items.map((item) => (
                  <MovieCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  )
}
