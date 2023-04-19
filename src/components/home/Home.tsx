import { useAppSelector } from '../../store/store';
import FilmCard from '../filmCard/FilmCard';

function Home() {

  const films = useAppSelector((state) => state.films)
  // console.log('Home--------' + JSON.stringify(films))

  return (
    <div className='Home'>
      {/* <p>{films.films[0].name}</p> */}
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