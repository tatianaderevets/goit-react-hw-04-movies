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
        const id = this.props.location.state.id;
        const response = await getCastInfo(id);
        this.setState({ casts: response.data.cast });
        // console.log("casts++", this.state.casts);

    }


    render() {
        const { casts, baseUrl } = this.state;
        return (

            <ul>
                {casts &&
                    casts.map(({ id, profile_path, name, character }) => (
                        <li key={id}>
                            {<img src={profile_path ? baseUrl + profile_path : defaultImg} alt={name} width="100" />}
                            <p>{name}</p>
                            <p>{character}</p>
                        </li>
                    ))}
            </ul>
        )
    }
}

export default Cast;