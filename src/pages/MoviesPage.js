import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';

class MoviesPage extends Component {
    state = {
        movies: [],
    }



    onChangeQuery = query => {
        console.log(query);
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b5cddda93f9edc63139a7ad5e58c546a&language=en-US&page=1&include_adult=false`)
            .then(response => {
                this.setState({ movies: response.data.results });

            })
        // console.log(response.data.results);


    };



    render() {
        const { movies } = this.state;
        return <>
            <h1>Movies</h1>
            <SearchForm onSubmit={this.onChangeQuery} />
            <ul>{movies.map(movie => <li key={movie.id}>{movie.title}</li>)}</ul>
        </>
    }

}


export default MoviesPage;