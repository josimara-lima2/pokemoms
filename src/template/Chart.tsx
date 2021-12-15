/* eslint-disable no-const-assign */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Title from "./Title";
import { UseAppSelector } from "../store";
import {
  PokemonItem,
  pokemonItemSelector,
} from "../store/reducers/pokemonItem";

import Typography from "@mui/material/Typography";
import charizard from "../images/charizard.png";

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
  const theme = useTheme();

  const { pokemon, isloadingItem } = UseAppSelector(pokemonItemSelector);

  let list: PokemonItem = {
    base_experience: 0,
    height: 0,
    forms: [{ name: "", url: "" }],
    id: 0,
  };

  if (!isloadingItem && pokemon !== undefined) {
    list = maior_experience(pokemon);
  }

  return (
    <React.Fragment>
      <Title>Maior experiencia</Title>

      <Typography component="p" variant="h5">
        {list.forms[0].name}
      </Typography>
      <Typography>
        {<img width="40px" src={charizard} alt="charizard" />}
      </Typography>
      <div>
        <Typography component="p" variant="h5">
          {list.base_experience}
        </Typography>
      </div>
    </React.Fragment>
  );
}
