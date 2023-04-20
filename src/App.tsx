import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Characters from './components/characters/Characters';
import { useAppDispatch } from './store/store';
import { getFilms } from './store/slices/filmsSlice';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFilms())
  },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/characters/:id' element={<Characters/>}/>
    </Routes>
  );
}

export default App;
