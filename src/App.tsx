import './App.css';
import { useAppDispatch } from './store/store';
import { getAllFilms } from './store/slices/filmsSlice';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Characters from './components/characters/Characters';

function App() {

  const dispatch = useAppDispatch()
  dispatch(getAllFilms())

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters/:id' element={<Characters/>}/>
      </Routes>
    </div>
  );
}

export default App;
