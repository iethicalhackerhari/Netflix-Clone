import axios from "axios";

 const Axios = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
  });

export const API_KEY = 'df06cdde7ccaf0e80f38eb7206914180'

export const requests = {
    fetchTrending: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    fetchDramas:`/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${API_KEY}`,
    fetchAction:`/discover/movie?with_genres=28&api_key=${API_KEY}`,
    fetchActionTV:`/discover/tv?with_genres=16&api_key=${API_KEY}`,
    fetchComedy:`/discover/movie?with_genres=35&api_key=${API_KEY}`,
    fetchComedyTV:`/discover/tv?with_genres=35&api_key=${API_KEY}`,
    fetchHorror:`/discover/movie?with_genres=27&api_key=${API_KEY}`,
    fetchHorrorTV:`/discover/tv?with_genres=27&api_key=${API_KEY}`,
    fetchRomance:`/discover/movie?with_genres=10749&api_key=${API_KEY}`,
    fetchRomanceTV:`/discover/tv?with_genres=10749&api_key=${API_KEY}`,
    imageUrl:`https://image.tmdb.org/t/p/original`,
    fetchTopRatedTV:`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAiringTodayTV:`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US`,
    fetchUpcomingMovies:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularTV:`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    
}
export default Axios;