/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
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

export default function VerticalTabs() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [anchorEl2, setAnchorEl2] = React.useState<HTMLButtonElement | null>(
    null
  );
  return (
    <div>
      <ListSubheader>Contatos</ListSubheader>
      <Button
        aria-describedby={Boolean(anchorEl) ? "simple-popover" : undefined}
        variant="text"
        color="inherit"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ width: 250, textAlign: "center" }}
      >
        Email
      </Button>
      <Popover
        id={Boolean(anchorEl) ? "simple-popover" : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 3 }}>josimara_lima88@hotmail.com</Typography>
      </Popover>

      <div>
        <Button
          aria-describedby={Boolean(anchorEl2) ? "simple-popover" : undefined}
          variant="text"
          color="inherit"
          onClick={(e) => setAnchorEl2(e.currentTarget)}
          sx={{ width: 250, textAlign: "center" }}
        >
          Git Hub
        </Button>
        <Popover
          id={Boolean(anchorEl2) ? "simple-popover" : undefined}
          open={Boolean(anchorEl2)}
          anchorEl={anchorEl2}
          onClose={() => setAnchorEl2(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 3 }}>git</Typography>
        </Popover>
      </div>
      <div></div>
    </div>
  );
}
