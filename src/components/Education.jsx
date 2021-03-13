import { AppBar, Paper, Tabs, Tab } from "@material-ui/core";
import { useState } from "react";

import "./css/CardSectionCommon.css";
import "./css/Education.css";

export default function Education() {
    const [value, setValue] = useState(0);
    
    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <Paper square elevation={0} className="card-section-app-bar">
            <AppBar position="relative" className="education-app-bar">
                <Tabs
                    value={value} 
                    index={0} 
                    onChange={handleChange}
                >
                    <Tab label="Tertiary" />
                    <Tab label="Higher School Certificate" />
                    <Tab label="School Certificate" />
                </Tabs>
            </AppBar>
        </Paper>
    )
}