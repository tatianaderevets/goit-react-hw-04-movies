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



export default MoviesPage;