import React from 'react'
import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies, history, query }) => {
    return (
        <ul>
            {movies.map((({ id, title }) => <li key={id}><NavLink to={{
                pathname: `/movies/${id}`,
                state: { id, from: history.location.pathname, query }
            }}>
                {title}
            </NavLink></li>))
            }
        </ul >

    )
}

export default MoviesList;