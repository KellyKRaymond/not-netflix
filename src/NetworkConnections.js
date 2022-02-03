export const ApiKey = 'de804da427140e75c52bb7138208bf26';
export const fetchMovieData = (route, query = '') => {
    return fetch(`https://api.themoviedb.org/3${route}?api_key=${ApiKey}${query}`)
        .then(res=>res.json())
}