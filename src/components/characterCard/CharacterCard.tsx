
export default function CharacterCard (props:any) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.eye_color}</h2>
            <h2>{props.gender}</h2>
        </div>
    )
}