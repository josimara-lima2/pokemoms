/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { UseAppDispatch, UseAppSelector } from '../store';
import { pokemonSelector,fetchApi } from '../store/reducers/pokemon';
import { useEffect } from 'react';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}



export default function Orders() {

  const dispatch = UseAppDispatch()
const {pokemonList,isloading} = UseAppSelector(pokemonSelector)

useEffect(() => {
    dispatch(fetchApi())
},[dispatch])


  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Url</TableCell>
            <TableCell >id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isloading && pokemonList.results !== undefined &&
           pokemonList.results.map((pokemon,index) => (
            <TableRow key={index}>
              <TableCell >{pokemon.name}</TableCell>
              <TableCell>{pokemon.url}</TableCell>
              <TableCell>{pokemon.id}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}