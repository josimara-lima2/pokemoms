/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-sequences */
import api from "../../services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface Pokemon {
  name: string;
  url: string;
  id:number
}
interface PokemonList {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

interface PokemonListState {
  pokemonList: PokemonList;
  isloading: boolean;
  
}

const initialState = {
  pokemonList: {},
  isloading: false,
  
} as PokemonListState;

export const fetchApi = createAsyncThunk("pokemon/fetchApi", async () => {
  const response = await api.get("pokemon");
  return response.data as PokemonList;
});

const PokemonSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {


  },
  extraReducers(builder) {
    builder.addCase(fetchApi.pending, (state) => {
      state.isloading = true;
    }),
      builder.addCase(fetchApi.fulfilled, (state, action) => {
        state.isloading = false;
        state.pokemonList = action.payload;
        state.pokemonList.results.map((item) => {
          let indice = item.url.split('/')
          let indiceNumber = indice[6]
          item.id = +indiceNumber
       
        }) 
      }),
      builder.addCase(fetchApi.rejected, (state) => {
        state.isloading = true;
      });
  },
});


export const pokemonSelector = (state:RootState) => state.pokemons
export default PokemonSlice.reducer;
