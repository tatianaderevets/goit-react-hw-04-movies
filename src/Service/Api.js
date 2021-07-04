import axios from "axios";


async function getTrendingFilms() {
    const resp = await axios({
        metod: "GET",
        url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=b5cddda93f9edc63139a7ad5e58c546a'
    });
    return resp;
}

function getFilmById(id) {
    return axios({
        metod: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=b5cddda93f9edc63139a7ad5e58c546a`,

    });
}

function getFilmByQuery(query) {
    return axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie?api_key=b5cddda93f9edc63139a7ad5e58c546a&query=" +
            query,
    })
}

function getCastInfo(id) {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b5cddda93f9edc63139a7ad5e58c546a`
    )
}

function getReviewsInfo(id) {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b5cddda93f9edc63139a7ad5e58c546a`
    )
}

export {
    getTrendingFilms,
    getFilmById,
    getFilmByQuery,
    getCastInfo,
    getReviewsInfo,
};