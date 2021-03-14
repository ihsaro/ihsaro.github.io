import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/Laptop';
import MenuBookIcon from "@material-ui/icons/MenuBook";

import NavigationBar from "./components/NavigationBar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Skill from "./components/Skill";

const useStyles = makeStyles({
    parentGrid: {
        marginTop: "15px"
    },
    sectionIcon: {
        marginLeft: "15px"
    }
});

export default function Profile() {
    const classes = useStyles();

    return (
        <>
            <NavigationBar />
            <Introduction />
            <Grid
                container
                direction="column"
                className={classes.parentGrid}
            >

                <HomeIcon id="home" className={classes.sectionIcon} />
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

                <MenuBookIcon id="education" className={classes.sectionIcon} />
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Education />
                    </Grid>
                </Grid>

                <LaptopIcon id="skills" className={classes.sectionIcon} />
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