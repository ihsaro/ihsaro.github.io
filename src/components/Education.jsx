import { AppBar, Box, Paper, Tabs, Tab, Typography } from "@material-ui/core";
import { useState } from "react";

import "./css/CardSectionCommon.css";
import "./css/Education.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

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
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Paper>
    )
}