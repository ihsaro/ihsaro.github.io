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
import { Drawer, Link } from '@material-ui/core';

const navigationBarTitleStyles = {
	flexGrow: 1,
	fontFamily: "'Montserrat', sans-serif"
}

const navigationBarButtonStyles = {
	fontFamily: "'Montserrat', sans-serif",
	fontSize: "13px"
}

const navigationBarIconStyles = {
	marginRight: "5px"
}

const menuIconStyles = {
	padding: "20px"
}

function DesktopNavigationBar() {
	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h6" style={navigationBarTitleStyles}>
					HOSSANEE Muhammad Idjaz Ali
				</Typography>
				<Button color="inherit" style={navigationBarButtonStyles}>
					<HomeIcon style={navigationBarIconStyles} />
					HOME
				</Button>
				<Button color="inherit" style={navigationBarButtonStyles}>
					<MenuBookIcon style={navigationBarIconStyles} />
					EDUCATION
				</Button>
				<Button color="inherit" style={navigationBarButtonStyles}>
					<LaptopIcon style={navigationBarIconStyles} />
					SKILLS
				</Button>
				<Button color="inherit" style={navigationBarButtonStyles}>
					<WorkOutlineIcon style={navigationBarIconStyles} />
					WORK EXPERIENCE
				</Button>
				<Button color="inherit" style={navigationBarButtonStyles}>
					<AccountTreeIcon style={navigationBarIconStyles} />
					PROJECTS
				</Button>
			</Toolbar>
		</AppBar>
  	);
}

function MobileNavigationBar() {
	const [isDrawerOpened, setIsDrawerOpened] = useState(false);

	const toggleDrawerStatus = (event) => {
		setIsDrawerOpened(true);
	}

	const closeDrawer = (event) => {
		setIsDrawerOpened(false);
	}

	return (
		<AppBar>
			<MenuIcon style={menuIconStyles} onClick={event => toggleDrawerStatus(event)} />
			<Drawer open={isDrawerOpened} onClose={event => closeDrawer(event)}>
				
			</Drawer>
		</AppBar>
	)
}

export default function NavigationBar() {

	const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
	const DESKTOP_WIDTH = 996

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