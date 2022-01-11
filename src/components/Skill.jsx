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
});

function createData(skillName, value) {
    return {
        skillName,
        value
    };
}

const rows = [
	createData('HTML', 65),
    createData('CSS', 50),
    createData('Javascript', 70),
    createData('Java', 60),
    createData('C#/ .NET', 70),
    createData('SQL', 65),
    createData('Git', 70),
    createData('Linux', 60),
    createData('Typescript', 60),
    createData('React JS', 60),
    createData('Python', 80),
    createData('Django/ Django Rest Framework', 80),
    createData('FastAPI', 60),
    createData('Docker', 40),
    createData('RabbitMQ/ Apache Kafka', 40)
]

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

function SingleSkill(props) {
    return (
        <Grid
            item
            xs={12}
            sm={6}
        >
            <LinearProgressWithLabel skillname={props.skillName} value={props.value} />
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
                {
                    rows.map((row) => (
                        <SingleSkill skillName={row.skillName} value={row.value} />
                    )
                )}
            </Grid>
        </Paper>
    )
}