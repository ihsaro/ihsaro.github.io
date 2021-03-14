import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LaptopIcon from "@material-ui/icons/Laptop";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Drawer, Link, makeStyles } from '@material-ui/core';

import './css/NavigationBar.css'

const useStyles = makeStyles({
	desktopNavigationBarTitle: {
		fontFamily: "'Montserrat', sans-serif !important",
		flexGrow: 1
	},
	mobileNavigationBarTitle: {
		fontFamily: "'Montserrat', sans-serif !important",
		padding: "20px"
	},
	navigationBarButton: {
		fontFamily: "'Montserrat', sans-serif !important",
		fontSize: "13px",
		textAlign: "left"
	},
	navigationBarIcon: {
		marginRight: "5px"
	},
	menuIcon: {
		padding: "20px"
	}
});

function DesktopNavigationBar() {

	const classes = useStyles();

	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h6" className={classes.desktopNavigationBarTitle}>
					HOSSANEE Muhammad Idjaz Ali
				</Typography>
				<Button color="inherit" className={classes.navigationBarButton} href="#home">
					<HomeIcon className={classes.navigationBarIcon} />
					HOME
				</Button>
				<Button color="inherit" className={classes.navigationBarButton} href="#education">
					<MenuBookIcon className={classes.navigationBarIcon} />
					EDUCATION
				</Button>
				<Button color="inherit" className={classes.navigationBarButton} href="#skills">
					<LaptopIcon className={classes.navigationBarIcon} />
					SKILLS
				</Button>
				<Button color="inherit" className={classes.navigationBarButton}>
					<WorkOutlineIcon className={classes.navigationBarIcon} />
					WORK EXPERIENCE
				</Button>
				<Button color="inherit" className={classes.navigationBarButton}>
					<AccountTreeIcon className={classes.navigationBarIcon} />
					PROJECTS
				</Button>
			</Toolbar>
		</AppBar>
  	);
}

function MobileNavigationBar() {
	const classes = useStyles();

	const [isDrawerOpened, setIsDrawerOpened] = useState(false);

	const toggleDrawerStatus = (event) => {
		setIsDrawerOpened(true);
	}

	const closeDrawer = (event) => {
		setIsDrawerOpened(false);
	}

	return (
		<AppBar>
			<MenuIcon className={classes.menuIcon} onClick={event => toggleDrawerStatus(event)} />
			<Drawer open={isDrawerOpened} onClose={event => closeDrawer(event)}>
				<Typography variant="h6" className={classes.mobileNavigationBarTitle}>
					HOSSANEE Muhammad Idjaz Ali
				</Typography>
				<Button color="inherit" className={classes.navigationBarButton} href="#home">
					<HomeIcon className={classes.navigationBarIcon} />
					HOME
				</Button>
				<Button color="inherit" className={classes.navigationBarButton} href="#education">
					<MenuBookIcon className={classes.navigationBarIcon} />
					EDUCATION
				</Button>
				<Button color="inherit" className={classes.navigationBarButton} href="#skills">
					<LaptopIcon className={classes.navigationBarIcon} />
					SKILLS
				</Button>
				<Button color="inherit" className={classes.navigationBarButton}>
					<WorkOutlineIcon className={classes.navigationBarIcon} />
					WORK EXPERIENCE
				</Button>
				<Button color="inherit" className={classes.navigationBarButton}>
					<AccountTreeIcon className={classes.navigationBarIcon} />
					PROJECTS
				</Button>
			</Drawer>
		</AppBar>
	)
}

export default function NavigationBar() {

	const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
	const DESKTOP_WIDTH = 1125;

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowInnerWidth(window.innerWidth);
        })
		return () => window.removeEventListener('resize', setWindowInnerWidth);
    }, [])

	if (windowInnerWidth > DESKTOP_WIDTH)
		return <DesktopNavigationBar />
	else
		return <MobileNavigationBar />
}