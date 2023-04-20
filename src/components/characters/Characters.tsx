import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCharacters } from "../../store/slices/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function Characters () {

    const dispatch = useAppDispatch()
    const { id } = useParams();

    let filmSelected:number = 0
    if(typeof id === 'string'){
        filmSelected = parseInt(id)
    }
    const characters = useAppSelector((state) => state.films.films[filmSelected]?.characters)

    useEffect(() => {
        dispatch(getCharacters(characters))
    },[dispatch,characters])

    // const a = useAppSelector((state) => state.films.characters)
    // console.log('b-------------'+characters)
    // console.log('a-----------'+a[0].name)

    return (
        <div>hola mundo</div>
    )
}