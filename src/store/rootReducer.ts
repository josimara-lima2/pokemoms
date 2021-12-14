import { combineReducers} from "@reduxjs/toolkit";
import PokemonReducer from './reducers/pokemon'
import pokemonItemReducer from "./reducers/pokemonItem";
const rootReducer = combineReducers({
    pokemons: PokemonReducer,
    pokemon: pokemonItemReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer