import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { getFilmById } from "../../Service/Api"
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Loader from "react-loader-spinner";




class MovieDetailsPage extends Component {
    state = {
        film: {},
        base_url: "https://image.tmdb.org/t/p/w500",
    };


    async componentDidMount() {

        if (this.props.location.state?.id !== undefined) {
            const id = this.props.location.state.id;
            const response = await getFilmById(id);
            this.setState({ film: response.data });
            // console.log("film", this.state.film);
        }


    }

    handleGoBack = () => {
        this.props.history.push(this.props.location.state.from, { query: this.props.location.state.query })


    }

    render() {
        const { film, base_url } = this.state;
        const url = film.poster_path;
        return (
            <>
                <button type="button" onClick={this.handleGoBack}>Go back</button>
                <h1>{film.title}</h1>
                {url && <img src={base_url + url} alt={film.title} />}
                <h2>Overview</h2>
                <p>{film.overview}</p>
                <h2>Popularity</h2>
                <p>{film.popularity}</p>
                <h2>Genres</h2>
                <ul>{film.genres && film.genres.map((i) => <li key={i.id}>{i.name}</li>)}</ul>
                <p>{film.vote}</p>
                <ul>
                    <li><Link to={{ pathname: `${this.props.match.url}/cast`, state: this.props.location.state }}>Cast</Link></li>
                    <li><Link to={{ pathname: `${this.props.match.url}/reviews`, state: this.props.location.state }}>Revievs</Link></li>
                </ul>

                <Route path={`${this.props.match.path}/cast`} component={Cast} />
                <Route path={`${this.props.match.path}/reviews`} component={Reviews} />


            </>
        )
    }

}

export default MovieDetailsPage;