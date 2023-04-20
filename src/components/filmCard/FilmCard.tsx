import { Link } from "react-router-dom"

export default function FilmCard (props:any) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>Episode: {props.episode}</h2>
            <h2>{props.director}</h2>
            <Link to={`/characters/${props.id}`} style={{ textDecoration: "inherit" }}>
                <h2>Characters</h2>
            </Link>
        </div>
    )
}