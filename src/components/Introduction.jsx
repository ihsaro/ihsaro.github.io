import { Grid } from "@material-ui/core";

import './css/Introduction.css';

export default function Introduction() {
    return (
        <Grid
            container
            alignItems="center"
            direction="column"
        >
            <img id="profile-picture" src={ process.env.PUBLIC_URL + "/profile_picture.jpg" } alt="" srcset=""/>
            <p id="sub-header">PROGRAMMER | OPEN SOURCE ENTHUSIAST | BADMINTON PLAYER</p>
        </Grid>
    )
}