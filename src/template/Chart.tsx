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
  let indice = 0
  let list: PokemonItem = {
    base_experience: 0,
    height: 0,
    forms: [{ name: "", url: "" }],
    id: 0,
  };

  if (!isloadingItem && pokemon !== undefined) {
    list = maior_experience(pokemon);
  
  imgs.map((img,index) => {
    if(img === list.forms[0].name){
      indice = index
    }
  })
}
  return (
    <React.Fragment>
      <Title>Maior experiencia</Title>

      <Typography component="p" variant="h5">
        {list.forms[0].name}
      </Typography>
      <Typography component="p" variant="h5">
      {<img width="70px" src={imgs[indice]} alt="tetse" />}
      </Typography>
      <div>
        <Typography component="p" variant="h5">
          {list.base_experience}
        </Typography>
      </div>
    </React.Fragment>
  );
}
