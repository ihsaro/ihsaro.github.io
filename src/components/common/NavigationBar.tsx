import React, { useEffect, useState } from "react";
import { useWindowSize } from "../common/CustomHooks";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LaptopIcon from "@material-ui/icons/Laptop";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const navBarButtonProperties = {
  fontFamily: "'Montserrat', sans-serif",
};

const navBarIconProperties = {
  paddingRight: "5px",
};

export default function NavigationBar() {
  const classes = useStyles();
  const size = useWindowSize();

  if (size.width > 1005) {
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              style={navBarButtonProperties}
            >
              HOSSANEE Muhammad Idjaz Ali
            </Typography>
            <Button color="inherit" style={navBarButtonProperties}>
              <HomeIcon fontSize="small" style={navBarIconProperties} />
              Home
            </Button>
            <Button color="inherit" style={navBarButtonProperties}>
              <MenuBookIcon fontSize="small" style={navBarIconProperties} />
              Education
            </Button>
            <Button color="inherit" style={navBarButtonProperties}>
              <LaptopIcon fontSize="small" style={navBarIconProperties} />
              Skills
            </Button>
            <Button color="inherit" style={navBarButtonProperties}>
              <WorkOutlineIcon fontSize="small" style={navBarIconProperties} />
              Work Experience
            </Button>
            <Button color="inherit" style={navBarButtonProperties}>
              <AccountTreeIcon fontSize="small" style={navBarIconProperties} />
              Projects
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
