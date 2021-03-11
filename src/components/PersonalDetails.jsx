import { Grid, Paper } from "@material-ui/core";

import CakeIcon from '@material-ui/icons/Cake';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import TranslateIcon from '@material-ui/icons/Translate';

import "./css/CardSectionCommon.css";

export default function PersonalDetails() {
    return (
        <Paper square elevation={1} className="card-section">
            <p className="card-title">DETAILS</p>
            <Grid
                container
                direction="column"
            >
                <Grid
                    item
                    direction="row"
                >
                    <CakeIcon />
                    <p className="card-text">21/11/1997</p>
                </Grid>
                <Grid
                    item
                    direction="row"
                >
                    <MailIcon />
                    <p className="card-text">idjazhossanee@gmail.com</p>
                </Grid>
                <Grid
                    item
                    direction="row"
                >
                    <PublicIcon />
                    <p className="card-text">Mauritius</p>
                </Grid>
                <Grid
                    item
                    direction="row"
                >
                    <TranslateIcon />
                    <p className="card-text">English | French | Creole</p>
                </Grid>
            </Grid>
        </Paper>
    )
}