import React, { useState } from "react";
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
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const navigationBarStyles = makeStyles((theme: Theme) =>
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

const drawerStyles = makeStyles({
  list: {
    width: 250,
  },
});

const navBarButtonProperties = {
  fontFamily: "'Montserrat', sans-serif",
};

const navBarIconProperties = {
  paddingRight: "5px",
};

type Anchor = "left";

export default function NavigationBar() {
  const navigationBarClasses = navigationBarStyles();
  const drawerClasses = drawerStyles();
  const size = useWindowSize();

  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={drawerClasses.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  paddingBottom: "20px",
                }}
              >
                HOSSANEE Muhammad Idjaz Ali
              </Typography>
            }
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontFamily: "Montserrat" }}>HOME</Typography>
            }
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontFamily: "Montserrat" }}>
                EDUCATION
              </Typography>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LaptopIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontFamily: "Montserrat" }}>
                SKILLS
              </Typography>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontFamily: "Montserrat" }}>
                WORK EXPERIENCE
              </Typography>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontFamily: "Montserrat" }}>
                PROJECTS
              </Typography>
            }
          />
        </ListItem>
      </List>
    </div>
  );

  if (size.width > 1005) {
    return (
      <div className={navigationBarClasses.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              className={navigationBarClasses.title}
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
      <div className={navigationBarClasses.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={navigationBarClasses.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={toggleDrawer("left", true)} />
              <Drawer
                anchor="left"
                open={drawerState["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
