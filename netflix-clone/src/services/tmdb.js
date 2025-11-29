import axios from "axios";

const apiKey = "a9187fd5eda82a44f00b95bcd8f0e58f";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
    language: "pt-PT",
  },
});

// Obter listas (filmes mais populares, séries trending, etc)
export const tmdb = {
  getTrending: () => api.get("/trending/all/week"),
  getPopularMovies: () => api.get("/movie/popular"),
  getPopularSeries: () => api.get("/tv/popular"),
  getTopMovies: () => api.get("/movie/top_rated"),
  getTopSeries: () => api.get("/tv/top_rated"),
  getMovieDetails: (id) => api.get(`/movie/${id}`, { params: { append_to_response: "videos,credits" } }),
  getSeriesDetails: (id) => api.get(`/tv/${id}`, { params: { append_to_response: "videos,credits" } }),
  search: (query) => api.get("/search/multi", { params: { query } }),
};
