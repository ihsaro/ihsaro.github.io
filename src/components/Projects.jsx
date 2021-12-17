import { useEffect, useState } from "react";
import { 
    Link, 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip, 
    makeStyles, 
    Snackbar, 
    Zoom, 
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import FileCopyIcon from '@material-ui/icons/FileCopy';
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

export default function Projects() {

    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const styles = makeStyles({
        parentContainer: {
            width: "calc(100% - 4vh)",
            margin: "20px"
        },
        tableHeader: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "bold"
        },
        tableFont: {
            fontFamily: "'Montserrat', sans-serif",
        }
    });

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

    useEffect(() => {
        async function fetchGithubRepositories() {
            const response = await fetch('https://api.github.com/users/ihsaro/repos');
            const data = await response.json();
            setRepos(data);
            setLoading(false);
        }
        fetchGithubRepositories();
    }, []);

    const classes = styles();

    if (loading) {
        return <p>Loading ...</p>
    }
    else {
        return (
            <TableContainer className={classes.parentContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeader}>TITLE</TableCell>
                            <TableCell className={classes.tableHeader}>DESCRIPTION</TableCell>
                            <TableCell className={classes.tableHeader}>ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {repos.map((row) => (
                        <TableRow
                            key={row.name}
                        >
                            <TableCell className={classes.tableFont} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.tableFont}>{row.description}</TableCell>
                            <TableCell>
                                <Tooltip arrow title="Link to Github Repo" TransitionComponent={Zoom} placement="bottom">
                                    <Link color="inherit" href={row.html_url} target="_blank">
                                        <GitHubIcon style={{padding: "5px"}} />
                                    </Link>
                                </Tooltip>
                                <Tooltip arrow title="Copy Git Clone Url" TransitionComponent={Zoom} placement="bottom">
                                    <Link color="inherit" href="#" onClick={(e) => e.preventDefault()}>
                                        <FileCopyIcon onClick={() => copyGitCloneUrlAndPopSuccessDialog(row.clone_url)} style={{padding: "5px"}} />
                                    </Link>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
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
            </TableContainer>
        );
    }
}