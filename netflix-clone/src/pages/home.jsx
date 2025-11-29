import { useState } from "react"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import MovieCard from "../components/moviecard"
import Footer from "../components/footer"
import sampleRows from "../data/media"

const uiRows = (() => {
  const movies = sampleRows.find(r => r.title === "Filmes")?.items || []
  const series = sampleRows.find(r => r.title === "Séries")?.items || []

  return [
    { title: "Recommended", items: movies.slice(0, 10) },
    { title: "Trending Now", items: series.slice(0, 10) },
    { title: "New Releases", items: movies.slice(1, 8) },
    { title: "Top 10 Series", items: series.slice(0, 10) },
  ]
})()

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <Navbar />

      <main className="pt-20">
        <Banner />

        <section className="container mt-8">
          {uiRows.map((row) => (
            <div key={row.title} className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{row.title}</h3>

              <div className="flex overflow-x-auto gap-3 scroll-smooth">
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
