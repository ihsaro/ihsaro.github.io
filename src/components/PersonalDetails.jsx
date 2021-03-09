import { Paper } from "@material-ui/core";
import "./css/CardSectionCommon.css";

export default function PersonalDetails() {
    return (
        <Paper square elevation={1} className="card-section">
            <p className="card-title">DETAILS</p>
        </Paper>
    )
}