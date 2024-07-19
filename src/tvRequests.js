const key = '20ee7ddc92e5923dbe9489331f6b1625'


const tvRequests = {
    airingToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
    onTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=2`,
    popular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=3`,
    }

    export default tvRequests;
