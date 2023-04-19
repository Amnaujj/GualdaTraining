import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import FilmState from '../../interfaces/filmState';
import { useAppDispatch } from '../store';

const ROUTE = "https://swapi.dev/api/";

const initialState : FilmState = {
    films: []
}

export const filmsSlice = createSlice({
    name : "films",
    initialState,
    reducers:{
        getAllFilms(state,action: PayloadAction<{ name: string; episode: string; director: string; characters: string[]; }[]>){
            // console.log('-----' + action.payload[0].name)
						state.films = action.payload
						// console.log('state-----' + JSON.stringify(state.films))
        },
    }
});

export const getAllFilms = ()=> async() => {
    const dispatch = useAppDispatch();
    try {
        var json = await axios.get(ROUTE +"films")
				let movies: {
					name: string,
					episode: string,
					director: string,
					characters: string[]
				} [] = []
				for(let i:number=0; i < json.data.results.length; i++){
					movies.push({
						name: json.data.results[i].title,
						episode: json.data.results[i].episode_id,
						director: json.data.results[i].director,
						characters: json.data.results[i].characters
					})
				}
				movies.sort(function(a, b) {
					if (a.episode > b.episode) {
						return 1;
					}
					if (a.episode < b.episode) {
						return -1;
					}
					return 0;
				})
				// console.log(movies)
        dispatch(filmsSlice.actions.getAllFilms(movies))
    } catch (err) {
        console.log(err)
    }
};


// export const { getAllFilms } = filmsSlice.actions;

export default filmsSlice.reducer;