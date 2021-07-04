import { Component } from "react"
import { getReviewsInfo } from "../../Service/Api"

class Reviews extends Component {
    state = {
        reviews: null,
    }

    async componentDidMount() {
        const id = this.props.location.state.id;
        const response = await getReviewsInfo(id);
        this.setState({ reviews: response.data.results });
        console.log("reviews++", this.state.reviews);
    }

    render() {
        const { reviews } = this.state

        return (

            <ul>
                {reviews && reviews.length > 0
                    ? reviews.map(({ id, author, content, url }) => (
                        <li key={id}>
                            <h2>{author}</h2>
                            <p>{content.slice(0, 500)}</p>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                ReadMore
                            </a>
                        </li>
                    ))
                    : "Sorry no reviews"}
            </ul>
        )
    }
}

export default Reviews;