const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
	fetchTopRatedMovies: `/movie/top_related?api_key=${API_KEY}&language-en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=3535`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=277`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchTvShow: `/tv/popular?api_key=${API_KEY}&language-en-US&page=1`,
};

export default requests;
