import React, { Component } from 'react';
import axios from "axios"

function getFilmById(id) {
    return axios({
        metod: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=b5cddda93f9edc63139a7ad5e58c546a`,

    });
}

class MovieDetailsPage extends Component {
    state = {
        film: {},
    };


    async componentDidMount() {
        console.log(this.props);
        const id = this.props.location.state.id;
        const response = await getFilmById(id);
        this.setState({ film: response.data })


    }

    handleGoBack = () => {
        this.props.history.push(this.props.location.state.from, { query: this.props.location.state.query })


    }

    render() {
        const { film } = this.state;
        return (
            <>
                <button type="button" onClick={this.handleGoBack}>Go back</button>
                <h1>{film.title}</h1>
                <p>{film.overview}</p>
            </>
        )
    }

}

export default MovieDetailsPage;