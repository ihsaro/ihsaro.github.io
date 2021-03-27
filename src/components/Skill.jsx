import { Box, Grid, Typography, LinearProgress, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cardSectionOnlyMargin: {
        margin: "20px"
    },
    progressBarLabelGrid: {
        fontFamily: "'Montserrat', sans-serif",
        marginBottom: "10px"
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
                    {props.skillName}
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
                <LinearProgress variant="determinate" {...props} />
            </Grid>
        </Grid>
    );
}

export default function Skill() {

    const classes = useStyles();

    return (
        <Paper square elevation={0} className={classes.cardSectionOnlyMargin}>
            <Grid
                container
                direction="row"
                spacing={4}
            >
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="HTML" value={65} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="CSS" value={50} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="Javascript" value={70} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="Java" value={80} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="C#" value={80} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="SQL" value={65} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="Git" value={50} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="Linux" value={60} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="Typescript" value={60} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel skillName="React JS" value={50} />
                </Grid>
            </Grid>
        </Paper>
    )
}