import React, { Component } from 'react'
import axios from 'axios';

// b5cddda93f9edc63139a7ad5e58c546a
// https://api.themoviedb.org/3/movie/550?api_key=b5cddda93f9edc63139a7ad5e58c546a

class HomePage extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        const response = await
            axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b5cddda93f9edc63139a7ad5e58c546a');
        // console.log(response.data.results);

        this.setState({ movies: response.data.results })

    }

    render() {
        return <>
            <h1>Trending today</h1>
            <ul>{this.state.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}</ul>
        </>
    }

}


export default HomePage;