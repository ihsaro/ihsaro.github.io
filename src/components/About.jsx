import { Paper } from "@material-ui/core";
import "./css/CardSectionCommon.css";

export default function About() {
    return (
        <Paper square elevation={1} className="card-section">
            <p className="card-title">ABOUT ME</p>
            <p className="card-text">
                I am a professional software developer seeking out new challenges and opportunities to grow my career. I am an open-source enthusiast who works with linux as my daily driver and my motivation to work is to make the world a place where technology is accessible to all 4 corners of the world, hence my love for open-source technologies.
            </p>
        </Paper>
    )
}