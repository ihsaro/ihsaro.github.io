import { Paper, makeStyles } from "@material-ui/core";

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
    }
});

export default function About() {
    const classes = useStyles();

    return (
        <Paper square elevation={1} className={classes.cardSection}>
            <p className={classes.cardTitle}>ABOUT ME</p>
            <p className={classes.cardText}>
                Software Developer. Open Source Enthusiast. Linux. Linus Torvalds is my hero.
            </p>
        </Paper>
    )
}