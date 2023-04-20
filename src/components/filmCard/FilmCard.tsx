import { Link } from "react-router-dom";
import './FilmCard.css';

export default function FilmCard (props:any) {

    return (
        <div className="FilmCard">
                { props.episode === 1 ? <img src={require(`../../assets/SW_E1.jpg`)} alt="img" className="MoviePoster"/>
                : props.episode === 2 ? <img src={require(`../../assets/SW_E2.jpg`)} alt="img" className="MoviePoster"/>
                : props.episode === 3 ? <img src={require(`../../assets/SW_E3.jpg`)} alt="img" className="MoviePoster"/>
                : props.episode === 4 ? <img src={require(`../../assets/SW_E4.jpg`)} alt="img" className="MoviePoster"/>
                : props.episode === 5 ? <img src={require(`../../assets/SW_E5.jpg`)} alt="img" className="MoviePoster"/>
                : props.episode === 6 ? <img src={require(`../../assets/SW_E6.jpg`)} alt="img" className="MoviePoster"/>
                : null
            }
                <div className="InfoMovie">
                    <h1 className="MovieTitle">{props.name}</h1>
                    <h2 className="MovieEandD">Episode: {props.episode}</h2>
                    <h2 className="MovieEandD">Director: {props.director}</h2>
                    <Link to={`/characters/${props.id}`} style={{ textDecoration: "inherit" }}>
                        <h2 className="CharactersBtn">All Characters</h2>
                    </Link>
                </div>
        </div>
    )
}

// ${props.episode}