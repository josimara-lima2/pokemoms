import { combineReducers} from "@reduxjs/toolkit";

import pokemonItemReducer from "./reducers/pokemonItem";
const rootReducer = combineReducers({
   
    pokemon: pokemonItemReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer