import React, { useEffect, useState } from 'react';
import { 
	AppBar, 
	Button, 
	Toolbar, 
	Typography, 
	Drawer, 
	makeStyles
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LaptopIcon from "@material-ui/icons/Laptop";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

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
	navigationBarButtonLabel: {
		justifyContent: "start !important",
    	padding: "10px"	
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
				<Typography 
					variant="h6" 
					className={classes.desktopNavigationBarTitle}
				>
					HOSSANEE Muhammad Idjaz Ali
				</Typography>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#home" 
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<HomeIcon className={classes.navigationBarIcon} />
					HOME
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#education" 
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<MenuBookIcon className={classes.navigationBarIcon} />
					EDUCATION
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#skills" 
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<LaptopIcon className={classes.navigationBarIcon} />
					SKILLS
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#work-experience"
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<WorkOutlineIcon className={classes.navigationBarIcon} />
					WORK EXPERIENCE
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#projects"
					classes={{label: classes.navigationBarButtonLabel}}
				>
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
			<MenuIcon 
				className={classes.menuIcon} 
				onClick={event => toggleDrawerStatus(event)} 
			/>
			<Drawer 
				open={isDrawerOpened} 
				onClose={event => closeDrawer(event)}
			>
				<Typography 
					variant="h6" 
					className={classes.mobileNavigationBarTitle}
				>
					HOSSANEE Muhammad Idjaz Ali
				</Typography>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#home" 
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<HomeIcon className={classes.navigationBarIcon} />
					HOME
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#education" 
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<MenuBookIcon className={classes.navigationBarIcon} />
					EDUCATION
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					href="#skills" 
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<LaptopIcon className={classes.navigationBarIcon} />
					SKILLS
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					classes={{label: classes.navigationBarButtonLabel}}
				>
					<WorkOutlineIcon className={classes.navigationBarIcon} />
					WORK EXPERIENCE
				</Button>
				<Button 
					color="inherit" 
					className={classes.navigationBarButton} 
					classes={{label: classes.navigationBarButtonLabel}}
				>
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