import key from "./key";

const requests = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=2`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=4`,
    action: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28&language=en-US&page=5`,
    
    }

export default requests;
