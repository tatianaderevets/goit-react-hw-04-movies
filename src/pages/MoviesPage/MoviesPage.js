import React, { Component } from 'react';
import { getFilmByQuery } from "../../Service/Api"
// import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList';



class MoviesPage extends Component {
    state = {
        query: "",
        films: [],
    }

    async componentDidMount() {
        if (this.props.location.state !== null) {
            const response = await getFilmByQuery(this.props.location.state.query);
            // console.log(response);
            this.setState({ films: response.data.results, query: this.props.location.state.query })
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await getFilmByQuery(this.state.query);
        this.setState({ films: response.data.results });
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    };

    render() {
        const { query, films } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={query} onChange={this.handleChange} />
                    <button>Search</button>
                </form>
                <MoviesList movies={films} history={this.props.history} query={query} />
            </div>
        );
    }
}
//     state = {
//         movies: [],
//     }



//     onChangeQuery = query => {
//         console.log(query);
//         axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b5cddda93f9edc63139a7ad5e58c546a&language=en-US&page=1&include_adult=false`)
//             .then(response => {
//                 this.setState({ movies: response.data.results });

//             })
//         // console.log(response.data.results);


//     };



//     render() {
//         const { movies } = this.state;
//         return <>
//             <SearchForm onSubmit={this.onChangeQuery} />
//             <MoviesList movies={movies} />

//         </>
//     }

// }


export default MoviesPage;