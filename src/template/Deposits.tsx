
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { UseAppDispatch, UseAppSelector } from '../store';
import { pokemonSelector, fetchApi } from '../store/reducers/pokemon';
import { useEffect } from 'react';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Quantidade() {
  const data = new Date()
  const dispatch = UseAppDispatch()
  const {pokemonList} = UseAppSelector(pokemonSelector)
  useEffect(()=>{
    dispatch(fetchApi())
  },[dispatch])
  return (
    <React.Fragment>
      <Title>Quantidade de pokemons</Title>
      <Typography component="p" variant="h4">
        {pokemonList.results !== undefined && pokemonList.results.length}
      </Typography>
     <div>
     <Typography color="text.secondary" sx={{ flex: 1 , marginTop:'25px'}}>
       {data.toLocaleString()}
      </Typography>
     </div>
      
    </React.Fragment>
  );
}