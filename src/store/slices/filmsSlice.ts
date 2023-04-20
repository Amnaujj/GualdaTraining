import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import FilmState from '../../interfaces/filmState';

const ROUTE = "https://swapi.dev/api/";

const initialState : FilmState = {
    films: [],
		characters: [],
		charactersFiltered: [],
		eyeColors: []
}

export const getFilms = createAsyncThunk('films/fetch', async (thunkAPI) => {
	const response = await axios.get(ROUTE + 'films')
	let movies: {
		name: string,
		episode: string,
		director: string,
		characters: string[]
	} [] = []
	for(let i:number=0; i < response.data.results.length; i++){
		movies.push({
			name: response.data.results[i].title,
			episode: response.data.results[i].episode_id,
			director: response.data.results[i].director,
			characters: response.data.results[i].characters
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
	return movies
})

export const getCharacters = createAsyncThunk('characters/fetch', async (characters:string[], thunkAPI) => {
	let char: {
		name: string,
		eye_color: string,
		gender: string
	} [] = []
	for(let i:number = 0; i < characters.length; i++){
		var response = await axios.get(characters[i])
		char.push({
			name: response.data.name,
			eye_color: response.data.eye_color,
			gender: response.data.gender
		})
	}
	return char
})

export const filmsSlice = createSlice({
    name : "films",
    initialState,
    reducers:{
			deleteCharacters(state) {
				state.characters = []
				state.charactersFiltered = []
			},
			filterGender: (state, action) => {
					let filteredGender = state.charactersFiltered.filter(p => p.gender === action.payload)
					state.charactersFiltered = filteredGender
			},
			filterEyes: (state, action) => {
				let filteredEyes = state.charactersFiltered.filter(p => p.eye_color === action.payload)
				state.charactersFiltered = filteredEyes
			},
			resetFilter(state) {
				state.charactersFiltered = state.characters
			}
    },
		extraReducers: (builder) => {
			builder.addCase(getFilms.fulfilled, (state,action) => {
				state.films = action.payload
			});
			builder.addCase(getCharacters.fulfilled, (state, action) => {
				state.characters = action.payload
				state.charactersFiltered = action.payload
				for( let i:number = 0; i < action.payload.length; i++ ) {
					let color = state.eyeColors.find( e => e === action.payload[i].eye_color)
					if( typeof color === 'undefined' ) {
						state.eyeColors.push(action.payload[i].eye_color)
					}
				}
			})
		}
});

export const { deleteCharacters, filterGender, filterEyes, resetFilter } = filmsSlice.actions

export default filmsSlice.reducer;