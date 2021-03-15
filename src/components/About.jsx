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
                I am a professional software developer seeking out new challenges and opportunities to grow my career. I am an open-source enthusiast who works with linux as my daily driver and my motivation to work is to make the world a place where technology is accessible to all 4 corners of the world, hence my love for open-source technologies.
            </p>
        </Paper>
    )
}