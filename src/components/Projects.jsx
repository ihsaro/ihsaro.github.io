import { Button, Card, CardActionArea, CardMedia, CardContent, CardActions, Grid, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cardSectionOnlyMargin: {
        margin: "20px"
    },
    cardFont: {
        fontFamily: "'Montserrat', sans-serif",
    },
    projectCard: {
        width: "100%"
    }
});

function ProjectCard() {

    const classes = useStyles();

    return (
        <Grid
            item
            xs={12}
            sm={2}
        >
            <Card className={`${classes.cardFont} ${classes.projectCard}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image={process.env.PUBLIC_URL + '/not_available.jpg'}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography className={classes.cardFont} gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography className={classes.cardFont} variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className={classes.cardFont} size="small" color="primary">
                        Github Repository
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default function Projects() {

    const classes = useStyles();

    return (
        <Paper square elevation={0} className={classes.cardSectionOnlyMargin}>
            <Grid
                container
                direction="row"
                spacing={4}
                alignItems="center"
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Grid>
        </Paper>
    )
}