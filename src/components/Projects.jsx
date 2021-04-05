import { useEffect, useState } from "react";
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

function ProjectCard(props) {

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
                        alt="Not Available"
                        height="250"
                        image={process.env.PUBLIC_URL + '/not_available.jpg'}
                        title="Not Available"
                    />
                    <CardContent>
                        <Typography className={classes.cardFont} gutterBottom component="h2">
                            {props.name}
                        </Typography>
                        <Typography className={classes.cardFont} variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href={props.html_url} className={classes.cardFont} size="small" color="primary">
                        Github Repository
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default function Projects() {

    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/ihsaro/repos');
        const data = await response.json();
        setRepos(data);
        setLoading(false);
    });

    const classes = useStyles();

    if (loading) {
        return <p>Loading ...</p>
    }
    else {
        return (
            <Paper square elevation={0} className={classes.cardSectionOnlyMargin}>
                <Grid
                    container
                    direction="row"
                    spacing={4}
                    alignItems="center"
                >
                    {
                        repos.map((repo) => (
                            <ProjectCard name={repo.name} description={repo.description} html_url={repo.html_url} />
                        )
                    )}
                </Grid>
            </Paper>
        );
    }
}