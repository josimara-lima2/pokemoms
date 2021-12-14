/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { UseAppDispatch, UseAppSelector } from '../store';
import  { PokemonItem,fetchApiItem, pokemonItemSelector } from '../store/reducers/pokemonItem';
import { useEffect } from 'react';
import { pokemonSelector , fetchApi} from '../store/reducers/pokemon';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const maior_experience = (list:PokemonItem[]) =>{
  let experiencia = 0
  list.map((item) => {
    if(item.base_experience > experiencia){
      experiencia = item.base_experience
    }
  })
  return experiencia
}
    

export default function Chart() {
  const theme = useTheme();
  const dispatch = UseAppDispatch()
  const {pokemon,isloadingItem} = UseAppSelector(pokemonItemSelector)
  const {pokemonList,isloading} = UseAppSelector(pokemonSelector)
  
  const list:PokemonItem[]= [] 
  if(!isloading && pokemonList.results !== undefined){
  const tam = pokemonList.results.length
 
 

  if(!isloadingItem && pokemon !== undefined){
    list.push(pokemon)
    console.log(list)
  
  }
}
  useEffect(()=>{

    dispatch(fetchApi())
    dispatch(fetchApiItem(2))
    
  },[dispatch])

  

  




  
  return (
    <React.Fragment>
      <Title>Maior experiencia</Title>
      <ResponsiveContainer>
        <div>{maior_experience(list)}
       
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
}