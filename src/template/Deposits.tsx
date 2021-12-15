
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { UseAppDispatch, UseAppSelector } from '../store';
import { useEffect } from 'react';
import { pokemonItemSelector } from '../store/reducers/pokemonItem';



export default function Quantidade() {
  const data = new Date()
  const dispatch = UseAppDispatch()
  const {pokemon} = UseAppSelector(pokemonItemSelector)
  useEffect(()=>{
   
  },[dispatch])
  return (
    <React.Fragment>
      <Title>Quantidade de pokemons</Title>
      <Typography component="p" variant="h4">
        {pokemon !== undefined && pokemon.length}
      </Typography>
     <div>
     <Typography color="text.secondary" sx={{ flex: 1 , marginTop:'25px'}}>
       {data.toLocaleString()}
      </Typography>
     </div>
      
    </React.Fragment>
  );
}