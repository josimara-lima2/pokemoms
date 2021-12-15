/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import Title from "./Title";
import { UseAppSelector } from "../store";
import {
  PokemonItem,
  pokemonItemSelector,
} from "../store/reducers/pokemonItem";

import Typography from "@mui/material/Typography";
import imgs from '../images/imgs'
import { useEffect } from "react";
const maior_experience = (list: PokemonItem[]) => {
  let data: PokemonItem = {
    base_experience: 0,
    height: 0,
    forms: [{ name: "", url: "" }],
    id: 0,
  };
  list.map((item) => {
    if (item.base_experience > data.base_experience) {
      data = item;
    }
  });
  return data;
};

export default function Chart() {
 

  const { pokemon, isloadingItem } = UseAppSelector(pokemonItemSelector);

  
  let indice = -1
const initial =  {
  base_experience: 0,
  height: 0,
  forms: [{ name: "", url: "" }],
  id: 0,
} as PokemonItem;
let list = initial

if (!isloadingItem && pokemon !== undefined) {
  list = maior_experience(pokemon);

  if(list.forms[0].name !== ''){
  imgs.map((img,index) => {
    let nameString = img.split('.')
    let names = nameString[0].split('/')
    let namePokemon = names[3]
    
    if(list.forms[0].name ===namePokemon){
      indice = index
      
    }
  })
}

}

  return (
    <React.Fragment>
      <Title>Maior experiencia</Title>

      <Typography component="p" variant="h5">
        {list.forms[0].name}
      </Typography>
      <Typography component="p" variant="h5">
      {indice>=0 && <img width="70px" src={imgs[indice]} alt="tetse" />}
      </Typography>
      <div>
        <Typography component="p" variant="h5">
          {list.base_experience}
        </Typography>
      </div>
    </React.Fragment>
  );
}
