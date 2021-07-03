import React, { Component } from 'react'
import axios from 'axios';
import MoviesList from '../../components/MoviesList';

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

        this.setState({ movies: response.data.results });
        // console.log(this.props);

    }

    render() {
        const { movies } = this.state;
        return <>
            <h1>Trending today</h1>
            <MoviesList movies={movies} history={this.props.history} />

        </>
    }

}


export default HomePage;