import { Grid, Link, Tooltip, Zoom } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './css/Introduction.css';

export default function Introduction() {
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
        >
            <img id="profile-picture" src={ process.env.PUBLIC_URL + "/profile_picture.jpg" } alt="" srcset=""/>
            <p id="sub-header">PROGRAMMER | OPEN SOURCE ENTHUSIAST | BADMINTON PLAYER</p>
            <Grid
                container
                justify="center"
                direction="row"
            >
                <Link color="inherit" href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167">
                    <Tooltip arrow title="LinkedIn" TransitionComponent={Zoom}>
                        <LinkedInIcon className="social-media-icon" />
                    </Tooltip>
                </Link>
                <Link color="inherit" href="https://github.com/ihsaro">
                    <Tooltip arrow title="Github" TransitionComponent={Zoom}>
                        <GitHubIcon className="social-media-icon" />
                    </Tooltip>
                </Link>
                <Link color="inherit" href="https://www.facebook.com/idjaz.hossanee.90">
                    <Tooltip arrow title="Facebook" TransitionComponent={Zoom}>
                        <FacebookIcon className="social-media-icon" />
                    </Tooltip>
                </Link>
            </Grid>
        </Grid>
    )
}