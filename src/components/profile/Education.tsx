import * as React from "react";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Education: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Stack sx={{ paddingTop: "3vh", paddingBottom: "3vh", width: "95%", margin: "0 auto" }}>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: "25%", fontFamily: "'Nunito', sans-serif", flexShrink: 0 }}>
                        Bsc (Hons) Computer Science
                    </Typography>
                    <Typography sx={{ marginLeft: "2vw", color: "text.secondary", fontFamily: "'Nunito', sans-serif" }}>
                        Graduated with a 1<sup>st</sup> class degree at the University of Mauritius
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif" }}>
                        Taking on my tertiary education from 2016 to 2019, being exposed to topics such as:
                        <ol>
                            <li>Object-Oriented Programming</li>
                            <li>Algorithm and Complexities</li>
                            <li>Software Engineering Principles</li>
                            <li>Web Development</li>
                            <li>Operating Systems</li>
                            <li>Computer Networking and Systems Administration</li>
                            <li>Parallel & Distributed System</li>
                            <li>And so on ...</li>
                        </ol>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "25%", fontFamily: "'Nunito', sans-serif", flexShrink: 0 }}>
                        Higher School Certificate
                    </Typography>
                    <Typography sx={{ marginLeft: "2vw", color: "text.secondary", fontFamily: "'Nunito', sans-serif" }}>
                        Completed HSC at Sir Abdool Raman Osman State College in the Technical Field
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif" }}>
                        Studied the following subjects, graded with the following:
                        <ol>
                            <li>Mathematics: A</li>
                            <li>Physics: B</li>
                            <li>Computer Science: C</li>
                            <li>General Paper: d</li>
                            <li>Physical Education: d</li>
                        </ol>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: "25%", fontFamily: "'Nunito', sans-serif", flexShrink: 0 }}>
                        School Certificate
                    </Typography>
                    <Typography sx={{ marginLeft: "2vw", color: "text.secondary", fontFamily: "'Nunito', sans-serif" }}>
                        Completed SC at Sir Abdool Raman Osman State College in the Technical Field
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif" }}>
                        Studied the following subjects, graded with the following:
                        <ol>
                            <li>Mathematics: 2</li>
                            <li>English: 3</li>
                            <li>French: 1</li>
                            <li>Additional Mathematics: 3</li>
                            <li>Physics: 3</li>
                            <li>Computer Science: 2</li>
                            <li>Design & Technology: 3</li>
                            <li>Physical Education: 2</li>
                        </ol>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
};
