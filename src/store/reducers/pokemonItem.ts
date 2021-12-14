/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-sequences */
import api from "../../services/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";



interface Pokemon {
  name: string;
  url: string;
}


export interface PokemonItem {
    base_experience: number;
    forms:Pokemon;
    id:number;
    height:number;
}

interface PokemonItemState{
    pokemon: PokemonItem;
    isloadingItem:boolean;
  
}



const initialState = {
  pokemon: {},
  isloadingItem:false,
  
} as PokemonItemState;




export const fetchApiItem = createAsyncThunk(`pokemon/fetchApiItem`, async (id:number) => {
  const response = await api.get(`pokemon/${id}/`);
  return response.data as PokemonItem;
});


const PokemonItemSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
  
  },
  extraReducers(builder) {
    builder.addCase(fetchApiItem.pending, (state) => {
      state.isloadingItem = true;
    }),
      builder.addCase(fetchApiItem.fulfilled, (state, action) => {
        state.isloadingItem = false;
        state.pokemon = action.payload;
      }),
      builder.addCase(fetchApiItem.rejected, (state) => {
        state.isloadingItem = true;
      });
  },
});

export const {} = PokemonItemSlice.actions
export const pokemonItemSelector = (state:RootState) => state.pokemon
export default PokemonItemSlice.reducer;
