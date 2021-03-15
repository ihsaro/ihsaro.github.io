import { Grid, Link, makeStyles, Tooltip, Zoom } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    profilePicture: {
        borderRadius: "50%",
        width: "250px",
        marginTop: "125px",
        display: "block"
    },
    subHeader: {
        marginTop: "25px",
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center"
    },
    socialMediaIcon: {
        padding: "0px 15px 0px 15px"
    }
});

export default function Introduction() {
    const classes = useStyles();

    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
        >
            <img className={classes.profilePicture} src={ process.env.PUBLIC_URL + "/profile_picture.jpg" } />
            <p className={classes.subHeader}>PROGRAMMER | OPEN SOURCE ENTHUSIAST | BADMINTON PLAYER</p>
            <Grid
                container
                justify="center"
                direction="row"
            >
                <Link color="inherit" href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167">
                    <Tooltip arrow title="LinkedIn" TransitionComponent={Zoom}>
                        <LinkedInIcon className={classes.socialMediaIcon} />
                    </Tooltip>
                </Link>
                <Link color="inherit" href="https://github.com/ihsaro">
                    <Tooltip arrow title="Github" TransitionComponent={Zoom}>
                        <GitHubIcon className={classes.socialMediaIcon} />
                    </Tooltip>
                </Link>
                <Link color="inherit" href="https://www.facebook.com/idjaz.hossanee.90">
                    <Tooltip arrow title="Facebook" TransitionComponent={Zoom}>
                        <FacebookIcon className={classes.socialMediaIcon} />
                    </Tooltip>
                </Link>
            </Grid>
        </Grid>
    )
}