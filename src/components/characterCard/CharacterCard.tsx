import './CharacterCard.css'

export default function CharacterCard (props:any) {
    return (
        <div className="CharacterCard">
            <h1 className='CharName'>{props.name}</h1>
            <h2 className='CharInf'>Eyes Color: {props.eye_color}</h2>
            <h2 className='CharInf'>Gender: {props.gender}</h2>
        </div>
    )
}