import { useParams } from "react-router-dom";

export default function Characters () {

    const { id } = useParams();
    console.log(id)

    return (
        <div>hola mundo</div>
    )
}