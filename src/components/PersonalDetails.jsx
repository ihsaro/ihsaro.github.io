import { Grid, Paper } from "@material-ui/core";

import CakeIcon from '@material-ui/icons/Cake';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import TranslateIcon from '@material-ui/icons/Translate';

import "./css/CardSectionCommon.css";
import "./css/PersonalDetails.css";

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
                >
                    <CakeIcon />
                    <p className="card-text personal-detail-value">21/11/1997</p>
                </Grid>
                <Grid
                    item
                >
                    <MailIcon />
                    <p className="card-text personal-detail-value">idjazhossanee@gmail.com</p>
                </Grid>
                <Grid
                    item
                >
                    <PublicIcon />
                    <p className="card-text personal-detail-value">Mauritius</p>
                </Grid>
                <Grid
                    item
                >
                    <TranslateIcon />
                    <p className="card-text personal-detail-value">English | French | Creole</p>
                </Grid>
            </Grid>
        </Paper>
    )
}