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
  let indice = 1
  const dispatch = UseAppDispatch()
  const {pokemon,isloadingItem} = UseAppSelector(pokemonItemSelector)
  const {pokemonList,isloading} = UseAppSelector(pokemonSelector)
  
  const list:PokemonItem[]= [] 

  if(!isloading && pokemonList.results !== undefined ){
   
     
  
  }
   




  useEffect(()=>{
    dispatch(fetchApi())
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