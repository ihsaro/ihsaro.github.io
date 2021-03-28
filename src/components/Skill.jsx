import { Box, Grid, Typography, LinearProgress, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cardSectionOnlyMargin: {
        margin: "20px"
    },
    progressBarLabelGrid: {
        fontFamily: "'Montserrat', sans-serif",
        marginBottom: "10px"
    },
    ProgressBarColorRed: {
        backgroundColor: "red" 
    },
    ProgressBarColorOrange: {
        backgroundColor: "orange" 
    },
    ProgressBarColorYellow: {
        backgroundColor: "yellow" 
    },
    ProgressBarColorBlue: {
        backgroundColor: "blue" 
    },
    ProgressBarColorGreen: {
        backgroundColor: "green" 
    }
})

function LinearProgressWithLabel(props) {

    const classes = useStyles();

    return (
        <Grid 
            container
            direction="column"
        >
            <Grid
                container
                direction="row"
                justify="space-between"
                className={classes.progressBarLabelGrid}
            >
                <Grid
                    item
                >
                    {props.skillname}
                </Grid>
                <Grid
                    item
                >
                    {`${props.value}%`}
                </Grid>
            </Grid>
            <Grid
                item
            >
                {
                    props.value >= 0 && props.value < 20 &&
                        <LinearProgress variant="determinate" {...props} classes={{
                            barColorPrimary: classes.ProgressBarColorRed
                        }} />
                }
                {
                    props.value >= 20 && props.value < 40 &&
                        <LinearProgress variant="determinate" {...props} classes={{
                            barColorPrimary: classes.ProgressBarColorOrange
                        }} />
                }
                {
                    props.value >= 40 && props.value < 60 &&
                        <LinearProgress variant="determinate" {...props} classes={{
                            barColorPrimary: classes.ProgressBarColorYellow
                        }} />
                }
                {
                    props.value >= 60 && props.value < 80 &&
                        <LinearProgress variant="determinate" {...props} classes={{
                            barColorPrimary: classes.ProgressBarColorBlue
                        }} />
                }
                {
                    props.value >= 80 && props.value <= 100 &&
                        <LinearProgress variant="determinate" {...props} classes={{
                            barColorPrimary: classes.ProgressBarColorGreen
                        }} />
                } 
            </Grid>
        </Grid>
    );
}

export default function Skill(props) {

    const classes = useStyles(props);

    return (
        <Paper square elevation={0} className={classes.cardSectionOnlyMargin}>
            <Grid
                container
                direction="row"
                spacing={4}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="HTML" value={65} backgroundcolor="red" />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="CSS" value={50} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="Javascript" value={70} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="Java" value={80} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="C#" value={80} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="SQL" value={65} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="Git" value={50} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="Linux" value={60} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="Typescript" value={60} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <LinearProgressWithLabel skillname="React JS" value={50} />
                </Grid>
            </Grid>
        </Paper>
    )
}