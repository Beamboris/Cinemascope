const key = '20ee7ddc92e5923dbe9489331f6b1625'

const requests = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
}

export default requests;