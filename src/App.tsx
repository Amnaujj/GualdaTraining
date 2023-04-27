import * as React from 'react'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './store/store';
import { getFilms } from './store/slices/filmsSlice';
// import Home from './components/home/Home';
// import Characters from './components/characters/Characters';

const Home = React.lazy(() => import('./components/home/Home'))
const Characters = React.lazy(() => import('./components/characters/Characters'))

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFilms())
  },[dispatch])

  return (
    <Routes>
      <Route index element={
        <React.Suspense fallback={
          <div className='Loading'>
            <img src={require('./assets/Loading2GIF.gif')} alt='img' className='LoadingGif'/>
          </div>
        }>
          <Home/>
        </React.Suspense>
      }/>
      <Route path='/characters/:id' element={
        <React.Suspense fallback={<div>loading...</div>}>
          <Characters/>
        </React.Suspense>
      }/>
    </Routes>
  );
}

export default App;
