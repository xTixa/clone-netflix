import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
    language: "pt-PT",
  },
});

export const tmdb = {
  getTrending: () => api.get("/trending/all/week"),
  getPopularMovies: () => api.get("/movie/popular"),
  getPopularSeries: () => api.get("/tv/popular"),
  getTopMovies: () => api.get("/movie/top_rated"),
  getTopSeries: () => api.get("/tv/top_rated"),

  // detalhes + atores + vídeos (trailers)
  getMovieDetails: (id) =>
    api.get(`/movie/${id}`, {
      params: { append_to_response: "videos,credits" },
    }),

  getSeriesDetails: (id) =>
    api.get(`/tv/${id}`, {
      params: { append_to_response: "videos,credits" },
    }),

  // pesquisa real
  search: (query) =>
    api.get("/search/multi", {
      params: { query },
    }),
};
