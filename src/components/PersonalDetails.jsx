import { Grid, Paper, makeStyles, Tooltip, Zoom } from "@material-ui/core";

import CakeIcon from '@material-ui/icons/Cake';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles({
    cardSection: {
        margin: "20px",
        padding: "5px 5px 5px 15px",
        height: "83.5%"
    },
    cardTitle: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "bold"
    },
    cardText: {
        fontFamily: "'Montserrat', sans-serif",
        display: "inline-block"
    },
    personalDetailValue: {
        marginLeft: "5px"
    }
});

export default function PersonalDetails() {

    const classes = useStyles();

    return (
        <Paper square elevation={1} className={classes.cardSection}>
            <p className={classes.cardTitle}>DETAILS</p>
            <Grid
                container
                direction="column"
            >
                <Grid
                    item
                >
                    <Tooltip arrow title="Date of Birth" TransitionComponent={Zoom} placement="top">
                        <CakeIcon />
                    </Tooltip>
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>21/11/1997</p>
                </Grid>
                <Grid
                    item
                >
                    <Tooltip arrow title="Email Address" TransitionComponent={Zoom} placement="top">
                        <MailIcon />
                    </Tooltip>
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>idjazhossanee@gmail.com</p>
                </Grid>
                <Grid
                    item
                >
                    <Tooltip arrow title="Homeland" TransitionComponent={Zoom} placement="top">
                        <PublicIcon />
                    </Tooltip>
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>Mauritius</p>
                </Grid>
                <Grid
                    item
                >
                    <Tooltip arrow title="Languages Spoken" TransitionComponent={Zoom} placement="top">
                        <TranslateIcon />
                    </Tooltip>
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>English | French | Creole</p>
                </Grid>
            </Grid>
        </Paper>
    )
}