import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { filterEyes, filterGender, getCharacters, resetFilter } from "../../store/slices/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import CharacterCard from '../characterCard/CharacterCard';
import './Characters.css';

export default function Characters () {

	const dispatch = useAppDispatch()
	const { id } = useParams();

	let filmSelected:number = 0
	if(typeof id === 'string'){
		filmSelected = parseInt(id)
	}
	const charactersAPI = useAppSelector((state) => state.films.films[filmSelected-1]?.characters)

	useEffect(() => {
		const promise = dispatch(getCharacters(charactersAPI))
		return () => {
			promise.abort()
		}
	},[dispatch,charactersAPI])

	const characters = useAppSelector((state) => state.films.charactersFiltered)
	const eyeColors = useAppSelector((state) => state.films.eyeColors)

	const sortByEyeColor = (e:any) => {
		dispatch(resetFilter())
		if( e.target.value !== 'all'){
			dispatch(filterEyes(e.target.value))
		}
	}
	const sortByGender = (e:any) => {
		dispatch(resetFilter())
		if( e.target.value !== 'all'){
			dispatch(filterGender(e.target.value))
		}
	}

	if(typeof characters[0] !== 'object'){
		return (
			<div className='Loading'>
				<Link to={`/`} style={{ textDecoration: "inherit" }}>
						<h2 className='BackBtn'>Back</h2>
				</Link>
				<img src={require('../../assets/Loading2GIF.gif')} alt='img' className='LoadingGif'/>
			</div>
		)
	}
	return (
		<div className='Characters'>
			<Link to={`/`} style={{ textDecoration: "inherit" }}>
				<h2 className='BackBtn'>Back</h2>
			</Link>
			<div className='Filters'>
				<select className='filterSelect' id='0' defaultValue="eyeColor" onChange={e => sortByEyeColor(e)}>
					<option value="eyeColor" disabled>eyes color...</option>
					<option className='filterOptions' value="all">all</option>
					{eyeColors.map(t => 
						<option className='filterOptions' key={t} value={t}>{t}</option>
					)}
				</select>
				<select className='filterSelect' id='1' defaultValue="Gender" onChange={e => sortByGender(e)}>
					<option value="Gender" disabled>gender...</option>
					<option className='filterOptions' value="all">all</option>
					<option className='filterOptions' value="male">male</option>
					<option className='filterOptions' value="female">female</option>
					<option className='filterOptions' value="n/a">no gender</option>
				</select>
			</div>
			<div className='CharactersContainer'>
				{characters[0]?.name?characters.map((char)=>
						<CharacterCard
								key={char.name}
								name={char.name}
								eye_color={char.eye_color}
								gender={char.gender}
						/>
				):null}
			</div>
		</div>
	)
}