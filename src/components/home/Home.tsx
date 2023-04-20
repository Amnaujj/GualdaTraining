import { useEffect } from 'react';
import { deleteCharacters } from '../../store/slices/filmsSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import FilmCard from '../filmCard/FilmCard';
import './Home.css';

function Home() {

  const dispatch = useAppDispatch()
  const films = useAppSelector((state) => state.films)

  useEffect(() => {
    dispatch(deleteCharacters())
},[dispatch])

  return (
    <div className='Home'>
      {films.films?.map((film)=>
        <FilmCard
          key={film.episode}
          id={film.episode}
          name={film.name}
          episode={film.episode}
          director={film.director}
        />
      )}
    </div>
  );
}

export default Home;