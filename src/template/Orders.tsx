/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { UseAppDispatch, UseAppSelector } from "../store";
import { useEffect } from "react";
import {
  fetchApiItem,
  pokemonItemSelector,
  deletePokemon,
} from "../store/reducers/pokemonItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Popper } from "@mui/material";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import styled from "@mui/material/styles/styled";
import { type } from "os";
import { useState } from "react";
import Button from "@mui/material/Button";


export const list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

type Props ={
  c:boolean
}

export default function Orders({c}:Props) {
  const dispatch = UseAppDispatch();
  const cor = !c ? '#000' : '#FFF'
  const { pokemon, isloadingItem } = UseAppSelector(pokemonItemSelector);

  
  useEffect(() => {
    dispatch(fetchApiItem(list));
  }, [dispatch]);

  const deletePok = (idPok: number) => {
    dispatch(deletePokemon({ idPok }));
   
  };

  const StyleTableCell = styled(TableCell)(({ theme }) => ({
    color: cor,
  }));

  const StyleTableRow = styled(TableCell)(({ theme }) => ({
    color: cor,
  }));

  

 
  return (
    
    <Box >
    <Title>Lista de Pokemons</Title>
      <Table size="small" >
        <TableHead >
          <TableRow sx={{color:cor}}>
            <StyleTableCell >Name</StyleTableCell>
            <StyleTableCell>Url</StyleTableCell>
            <StyleTableCell>Base_experience</StyleTableCell>
            <StyleTableCell>id</StyleTableCell>
            <StyleTableCell></StyleTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {!isloadingItem &&
            pokemon !== undefined &&
            pokemon.map((pokemon, index) => (
              <TableRow key={index}>
                <StyleTableCell>{pokemon.forms[0].name}</StyleTableCell>
                <StyleTableCell>{pokemon.forms[0].url}</StyleTableCell>
                <StyleTableCell>{pokemon.base_experience}</StyleTableCell>
                <StyleTableCell>{pokemon.id}</StyleTableCell>
                <StyleTableCell>
                  <IconButton  onClick={(e)=>deletePok( pokemon.id)}>
                    <DeleteIcon sx={{color:cor}}/>
                  </IconButton>
                  
                </StyleTableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  
  );
}

