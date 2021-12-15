/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const mainListItems = (
  <div>
    
    <Link href="#" sx={{ textDecoration: "none", color: "#000c" }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
      <CatchingPokemonIcon />
        
      </ListItemIcon>
      <Link
        href="https://www.pokemon.com/br/pokedex/"
        sx={{ textDecoration: "none", color: "#000c" }}
      >
        {" "}
        <ListItemText primary="Pokemons" />
      </Link>
    </ListItem>
  </div>
);


export  function MenuPopupState() {
  return (
   
    <div>
     <ListSubheader>Contatos</ListSubheader>
      <ListItem button>
    <ListItemIcon>
    <GitHubIcon />
    </ListItemIcon>
    <Link
      href="https://github.com/josimara-lima2"
      sx={{ textDecoration: "none", color: "#000c" }}
    >
      {" "}
      <ListItemText primary="Git Hub" />
    </Link>
  </ListItem>

<div>
<ListItem button>
    <ListItemIcon>
    <LinkedInIcon/>
    </ListItemIcon>
    <Link
      href="https://www.linkedin.com/in/josimara-silva-58ba4b164/"
      sx={{ textDecoration: "none", color: "#000c" }}
    >
      {" "}
      <ListItemText primary="Linkedin" />
    </Link>
  </ListItem>
</div>
<div>
<ListItem button>
    <ListItemIcon>
    <EmailIcon/>
    </ListItemIcon>
    <Link
      href="mailto:josybehlul@gmail.com?subject=Hello%20again"
      sx={{ textDecoration: "none", color: "#000c" }}
    >
      {" "}
      <ListItemText primary="Email" />
    </Link>
  </ListItem>
</div>
    </div>
  
  );
}