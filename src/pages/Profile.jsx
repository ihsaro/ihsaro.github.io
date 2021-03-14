import { Grid } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/Laptop';
import MenuBookIcon from "@material-ui/icons/MenuBook";

import NavigationBar from "../components/NavigationBar";
import Introduction from "../components/Introduction";
import About from "../components/About";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import "./css/Profile.css";
import Skill from "../components/Skill";

export default function Profile() {
    return (
        <>
            <NavigationBar />
            <Introduction />
            <Grid
                container
                direction="column"
                className="parent-grid"
            >

                <HomeIcon id="home" className="section-icon" />
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12} sm={6}>
                        <About />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <PersonalDetails />
                    </Grid>
                </Grid>

                <MenuBookIcon id="education" className="section-icon" />
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Education />
                    </Grid>
                </Grid>

                <LaptopIcon id="skills" className="section-icon" />
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Skill />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}