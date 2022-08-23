import * as React from "react";

import {
    Box,
    Chip,
    Collapse,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
    title: string,
    yearsWorked: string,
    company: string,
    summary: string,
    technologies: Array<string>
) {
    return {
        title,
        yearsWorked,
        company,
        summary,
        technologies,
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontFamily: "'Nunito', sans-serif" }}
                >
                    {row.title}
                </TableCell>
                <TableCell
                    align="right"
                    sx={{ fontFamily: "'Nunito', sans-serif" }}
                >
                    {row.yearsWorked}
                </TableCell>
                <TableCell
                    align="right"
                    sx={{ fontFamily: "'Nunito', sans-serif" }}
                >
                    {row.company}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="body2"
                                sx={{ fontFamily: "'Nunito', sans-serif" }}
                            >
                                {row.summary}
                            </Typography>
                            {row.technologies.map((technology) => (
                                <Chip
                                    label={technology}
                                    variant="outlined"
                                    sx={{
                                        fontFamily: "'Nunito', sans-serif",
                                        margin: "10px 10px 10px 0px",
                                    }}
                                />
                            ))}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData(
        "Software Engineer III",
        "May 2022 - Present",
        "Ceridian Mauritius",
        "My role during this phase was pretty much the same as my previous role, except that it had a lot of mentoring.",
        [
            "C#/ .NET",
            "TS/ JS",
            "Dojo Toolkit",
            "HTML",
            "Stylus",
            "SQL Server",
            "XML",
            "JSON",
            "REST",
            "Specflow",
            "Selenium",
        ]
    ),
    createData(
        "Software Engineer",
        "Jan 2021 - Apr 2022",
        "Ceridian Mauritius",
        "During this cycle, I was presented with more challenging tasks around the same domain that I was working on as an associate. I also started working extensively on building RESTFul Web Services later on this journey.",
        [
            "C#/ .NET",
            "TS/ JS",
            "Dojo Toolkit",
            "HTML",
            "Stylus",
            "SQL Server",
            "XML",
            "JSON",
            "REST",
            "Specflow",
            "Selenium",
        ]
    ),
    createData(
        "Associate Software Engineer",
        "Jun 2019 - Dec 2020",
        "Ceridian Mauritius",
        "Kickstarted my career after my Bachelor's Degree, completely immersing myself as a full-stack developer, working on numerous features, both frontend and backend. During this cycle, I also built my team's UI Automation Framework using specflow and selenium.",
        [
            "C#/ .NET",
            "TS/ JS",
            "Dojo Toolkit",
            "HTML",
            "Stylus",
            "SQL Server",
            "XML",
            "JSON",
            "Specflow",
            "Selenium",
        ]
    ),
    createData(
        "Intern",
        "May 2018 - Aug 2018",
        "Ceridian Mauritius",
        "Engaged in my mandatory 3 months of internship (as part of the university curriculum), creating a customizable navigation bar using Razor and writing some helper Powershell scripts.",
        ["C#/ .NET", "Razor", "Powershell"]
    ),
    createData(
        "Freelance Webmaster",
        "May 2016 - Sep 2016",
        "Proximity BBDO Mauritius",
        "Maintained existing web based solutions using mainly the Sitecore CMS.",
        ["Sitecore", "HTML"]
    ),
];

export const WorkExperience: React.FC = () => {
    return (
        <TableContainer sx={{ margin: "20px auto", width: "91%" }}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell sx={{ fontFamily: "'Nunito', sans-serif" }}>
                            Title
                        </TableCell>
                        <TableCell
                            align="right"
                            sx={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            Years worked
                        </TableCell>
                        <TableCell
                            align="right"
                            sx={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            Company
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.title} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
