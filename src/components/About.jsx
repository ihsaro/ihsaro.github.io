import { Paper } from "@material-ui/core";
import "./css/CardSectionCommon.css";

export default function About() {
    return (
        <Paper square elevation={1} className="card-section">
            <p className="card-title">ABOUT ME</p>
        </Paper>
    )
}