import Navbar from '../components/navbar'
import Banner from '../components/banner'
import MovieCard from '../components/moviecard'
import Footer from '../components/footer'

const sampleRows = [
  {
    title: 'Recomended',
    items: new Array(12).fill(0).map((_, i) => `Filme ${i + 1}`),
  },
  {
    title: 'Tendencies',
    items: new Array(10).fill(0).map((_, i) => `Série ${i + 1}`),
  },
  {
    title: 'Realeses',
    items: new Array(8).fill(0).map((_, i) => `Lançamento ${i + 1}`),
  },
  {
    title: 'Top 10 Series of all Time',
    items: new Array(6).fill(0).map((_, i) => `Popular ${i + 1}`),
  },
  {
    title: 'Top 10 Movies of all Time',
    items: new Array(9).fill(0).map((_, i) => `Popular ${i + 1}`),
  }
]

export default function Home() {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      <main className="pt-20">
        <Banner />
        <section className="container mt-8">
          {sampleRows.map((row) => (
            <div key={row.title} className="mb-6">
              <h3 className="row-title">{row.title}</h3>
              <div className="scroll-row">
                {row.items.map((it) => (
                  <MovieCard key={it} title={it} />
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
