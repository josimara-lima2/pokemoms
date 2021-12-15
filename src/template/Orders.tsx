/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { UseAppDispatch, UseAppSelector } from '../store';
import { useEffect } from 'react';
import { fetchApiItem, pokemonItemSelector } from '../store/reducers/pokemonItem';



export const list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]


export default function Orders() {

const dispatch = UseAppDispatch()
const {pokemon,isloadingItem} = UseAppSelector(pokemonItemSelector)
useEffect(() => {
    dispatch(fetchApiItem(list))
    
},[dispatch])


  return (
    <React.Fragment>
      <Title>Lista de Pokemons</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Url</TableCell>
            <TableCell >Base_experience</TableCell>
            <TableCell >id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isloadingItem && pokemon !== undefined &&
           pokemon.map((pokemon,index) => (
            <TableRow key={index}>
              <TableCell >{pokemon.forms[0].name}</TableCell>
              <TableCell>{pokemon.forms[0].url}</TableCell>
              <TableCell>{pokemon.base_experience}</TableCell>
              <TableCell>{pokemon.id}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}