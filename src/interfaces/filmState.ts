import Character from "./character"
import Films from "./films"

export default interface FilmState {
    films: Films[]
    characters: Character[]
}