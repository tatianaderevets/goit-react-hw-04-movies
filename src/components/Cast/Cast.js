import { Component } from "react";
import defaultImg from "./defaultImg.jpg";
import { getCastInfo } from "../../Service/Api"

class Cast extends Component {
    state = {
        casts: null,
        baseUrl: "https://image.tmdb.org/t/p/w500",

    }
    async componentDidMount() {
        // console.log("casts++", this.props);
        if (this.props.location.state?.id !== undefined) {
            const id = this.props.location.state.id;
            const response = await getCastInfo(id);
            this.setState({ casts: response.data.cast });
            // console.log("casts++", this.state.casts);
        }
    }


    render() {
        const { casts, baseUrl } = this.state;
        return (

            <ul>
                {casts && casts.length > 0 ?
                    casts.map(({ cast_id, profile_path, name, character }) => (
                        <li key={cast_id}>
                            {<img src={profile_path ? baseUrl + profile_path : defaultImg} alt={name} width="100" />}
                            <p>{name}</p>
                            <p>{character}</p>
                        </li>
                    )) :
                    <li>Not found any casts</li>
                }
            </ul>
        )
    }
}

export default Cast;