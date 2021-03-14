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

import './css/NavigationBar.css'

function DesktopNavigationBar() {
	return (
		<AppBar className="navigation-bar">
			<Toolbar>
				<Typography variant="h6" className="navigationBarTitleStyles">
					HOSSANEE Muhammad Idjaz Ali
				</Typography>
				<Button color="inherit" className="navigationBarButtonStyles" href="#home">
					<HomeIcon className="navigationBarIconStyles" />
					HOME
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles" href="#education">
					<MenuBookIcon className="navigationBarIconStyles" />
					EDUCATION
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles" href="#skills">
					<LaptopIcon className="navigationBarIconStyles" />
					SKILLS
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles">
					<WorkOutlineIcon className="navigationBarIconStyles" />
					WORK EXPERIENCE
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles">
					<AccountTreeIcon className="navigationBarIconStyles" />
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
			<MenuIcon className="menuIconStyles" onClick={event => toggleDrawerStatus(event)} />
			<Drawer open={isDrawerOpened} onClose={event => closeDrawer(event)}>
				<Typography variant="h6" className="mobileNavigationBarTitleStyles">
					HOSSANEE Muhammad Idjaz Ali
				</Typography>
				<Button color="inherit" className="navigationBarButtonStyles" href="#home">
					<HomeIcon className="navigationBarIconStyles" />
					HOME
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles" href="#education">
					<MenuBookIcon className="navigationBarIconStyles" />
					EDUCATION
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles" href="#skills">
					<LaptopIcon className="navigationBarIconStyles" />
					SKILLS
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles">
					<WorkOutlineIcon className="navigationBarIconStyles" />
					WORK EXPERIENCE
				</Button>
				<Button color="inherit" className="navigationBarButtonStyles">
					<AccountTreeIcon className="navigationBarIconStyles" />
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