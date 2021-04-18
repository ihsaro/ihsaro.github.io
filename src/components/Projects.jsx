import { useEffect, useState } from "react";
import { Box, Link, Grid, Tooltip, Paper, makeStyles, Snackbar, Zoom, Step } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';


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

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProjectCard(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const copyGitCloneUrlAndPopSuccessDialog = (clone_url) => {
        navigator.clipboard.writeText(clone_url);
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className={classes.cardFont}
        >
            <Paper elevation={3} className={classes.projectCard}>
                <Box style={{padding: "5px"}}>
                    <b>Title:</b> {props.name}
                </Box>
                <Box>
                    <Tooltip arrow title="Link to Github Repo" TransitionComponent={Zoom} placement="bottom">
                        <Link color="inherit" href={props.html_url}>
                            <GitHubIcon style={{padding: "5px"}} />
                        </Link>
                    </Tooltip>
                    <Tooltip className="descriptionTooltip" arrow title="Description" TransitionComponent={Zoom} placement="bottom">
                        <Link color="inherit" href="#" onClick={(e) => e.preventDefault()}>
                            <DescriptionIcon style={{padding: "5px"}} />
                        </Link>
                    </Tooltip>
                    <Tooltip arrow title="Copy Git Clone Url" TransitionComponent={Zoom} placement="bottom">
                        <Link color="inherit" href="#" onClick={(e) => e.preventDefault()}>
                            <FileCopyIcon onClick={() => copyGitCloneUrlAndPopSuccessDialog(props.clone_url)} style={{padding: "5px"}} />
                        </Link>
                    </Tooltip>
                    <Snackbar 
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} 
                        open={open} autoHideDuration={1000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            URL Copied
                        </Alert>
                    </Snackbar>
                </Box>
            </Paper>
        </Grid>
    );
}

export default function Projects() {

    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGithubRepositories() {
            const response = await fetch('https://api.github.com/users/ihsaro/repos');
            const data = await response.json();
            setRepos(data);
            setLoading(false);
        }
        fetchGithubRepositories();
    }, []);

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
                            <ProjectCard name={repo.name} description={repo.description} html_url={repo.html_url} clone_url={repo.clone_url} />
                        )
                    )}
                </Grid>
            </Paper>
        );
    }
}