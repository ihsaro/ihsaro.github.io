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

                <HomeIcon className="section-icon" />
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

                <MenuBookIcon className="section-icon" />
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Education />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}