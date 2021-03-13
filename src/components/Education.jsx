import { AppBar, Box, Paper, Tabs, Tab, Typography } from "@material-ui/core";
import { useState } from "react";

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
            <AppBar position="relative">
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
                <p className="tertiary-text"><u>Institution</u>: University of Mauritius</p>
                <p className="tertiary-text"><u>Course</u>: BSc (Hons) Computer Science</p>
                <p className="tertiary-text"><u>Year</u>: 2016 - 2019</p>
                <p className="tertiary-text"><u>Comments</u></p>
                <p className="tertiary-text">
                    Graduated with a <b>1<sup>st</sup> class degree</b>, being exposed to topics such as: <br />
                    <ol>
                        <li>Object-Oriented Programming</li>
                        <li>Algorithm and Complexities</li>
                        <li>Software Engineering Principles</li>
                        <li>Web Development</li>
                        <li>Operating Systems</li>
                        <li>Computer Networking and Systems Administration</li>
                        <li>Parallel & Distributed System</li>
                        <li><em>And so on ...</em></li>
                    </ol>
                </p>
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