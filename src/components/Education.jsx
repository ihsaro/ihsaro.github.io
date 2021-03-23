import { AppBar, Box, Paper, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    educationText: {
        fontFamily: "'Montserrat', sans-serif",
        display: "block"
    },
    educationAppBar: {
        zIndex: "1 !important"
    },
    tableContainer: {
        maxWidth: "75%"
    },
    tableHeader: {
        fontFamily: "'Montserrat', sans-serif !important",
        fontWeight: "bold !important"
    },
    tableRow: {
        fontFamily: "'Montserrat', sans-serif !important"
    },
    cardSectionOnlyMargin: {
        margin: "20px"
    }
});

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

function SecondaryResult(props) {

    const classes = useStyles();

    return (
        <>
            <p className={classes.educationText}><u>Institution</u>: {props.institutionName}</p>
            <p className={classes.educationText}><u>Year</u>: {props.year}</p>
            <TableContainer className={classes.tableContainer}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeader}>Subject</TableCell>
                        <TableCell className={classes.tableHeader}>Result</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.results.map((row) => (
                        <TableRow key={row.subject}>
                            <TableCell className={classes.tableRow} component="th" scope="row">
                                {row.subject}
                            </TableCell>
                            <TableCell className={classes.tableRow}>{row.result}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

function createResult(subject, result) {
    return { subject, result }
}

const hscResults = [
    createResult('Mathematics', 'A'),
    createResult('Physics', 'B'),
    createResult('Computer Science', 'C'),
    createResult('General Paper', 'd'),
    createResult('Physical Education', 'd')
]

const scResults = [
    createResult('Mathematics', '2'),
    createResult('English', '3'),
    createResult('French', '1'),
    createResult('Additional Mathematics', '3'),
    createResult('Physics', '3'),
    createResult('Computer Science', '2'),
    createResult('Design & Technology', '3'),
    createResult('Physical Education', '2')
]

export default function Education() {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    
    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <Paper square elevation={0} className={classes.cardSectionOnlyMargin}>
            <AppBar className={classes.educationAppBar} position="relative">
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
                <p className={classes.educationText}><u>Institution</u>: University of Mauritius</p>
                <p className={classes.educationText}><u>Course</u>: BSc (Hons) Computer Science</p>
                <p className={classes.educationText}><u>Year</u>: 2016 - 2019</p>
                <p className={classes.educationText}><u>Comments</u></p>
                <p className={classes.educationText}>
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
                <SecondaryResult institutionName="Sir Abdool Raman Osman State College" year="2015" results={hscResults} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SecondaryResult institutionName="Sir Abdool Raman Osman State College" year="2013" results={scResults} />
            </TabPanel>
        </Paper>
    )
}