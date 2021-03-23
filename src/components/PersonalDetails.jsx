import { Grid, Paper, makeStyles } from "@material-ui/core";

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
                    <CakeIcon />
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>21/11/1997</p>
                </Grid>
                <Grid
                    item
                >
                    <MailIcon />
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>idjazhossanee@gmail.com</p>
                </Grid>
                <Grid
                    item
                >
                    <PublicIcon />
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>Mauritius</p>
                </Grid>
                <Grid
                    item
                >
                    <TranslateIcon />
                    <p className={`${classes.cardText} ${classes.personalDetailValue}`}>English | French | Creole</p>
                </Grid>
            </Grid>
        </Paper>
    )
}