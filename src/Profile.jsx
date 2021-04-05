import { Grid, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/Laptop';
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

import NavigationBar from "./components/NavigationBar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Skill from "./components/Skill";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

const useStyles = makeStyles({
    parentGrid: {
        marginTop: "15px"
    },
    sectionIcon: {
        marginLeft: "20px"
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
                <Tooltip arrow title="Home" TransitionComponent={Zoom} placement="right">
                    <HomeIcon className={classes.sectionIcon} />
                </Tooltip>
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

                <Tooltip arrow title="Education" TransitionComponent={Zoom} placement="right">
                    <MenuBookIcon id="education" className={classes.sectionIcon} />
                </Tooltip>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Education />
                    </Grid>
                </Grid>

                <Tooltip arrow title="Skills" TransitionComponent={Zoom} placement="right">
                    <LaptopIcon id="skills" className={classes.sectionIcon} />
                </Tooltip>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Skill />
                    </Grid>
                </Grid>

                <Tooltip arrow title="Work Experience" TransitionComponent={Zoom} placement="right">
                    <WorkOutlineIcon id="work-experience" className={classes.sectionIcon} />
                </Tooltip>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <WorkExperience />
                    </Grid>
                </Grid>

                <Tooltip arrow title="Projects" TransitionComponent={Zoom} placement="right">
                    <AccountTreeIcon id="projects" className={classes.sectionIcon} />
                </Tooltip>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12}>
                        <Projects />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}