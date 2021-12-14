import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import DashboardIcon from '@mui/icons-material/Dashboard';


import EmailIcon from '@mui/icons-material/Email';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const mainListItems = (

  
  <div>

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <CatchingPokemonIcon />
      </ListItemIcon>
      <ListItemText primary="Pokemons" />
    </ListItem>
   
   
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Contatos</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary="Email" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="Git Hub" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LinkedInIcon />
      </ListItemIcon>
      <ListItemText primary="Linkedin" />
    </ListItem>
  </div>
);