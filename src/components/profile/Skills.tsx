import * as React from "react";

import { Chip, Grid, Stack, Typography } from "@mui/material";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TagFacesIcon from "@mui/icons-material/TagFaces";

export const Skills: React.FC = () => {
    const programmingLanguages: { label: string; strengthRate: any }[] = [
        { label: "C#", strengthRate: <TagFacesIcon /> },
        { label: "Python", strengthRate: <TagFacesIcon /> },
        { label: "TS/JS", strengthRate: <TagFacesIcon /> },
        { label: "Java", strengthRate: <SentimentSatisfiedAltIcon /> },
    ];

    const webFrameworks: { label: string; strengthRate: any }[] = [
        { label: ".NET", strengthRate: <TagFacesIcon /> },
        {
            label: "Django/ Django REST Framework",
            strengthRate: <TagFacesIcon />,
        },
        { label: "FastAPI", strengthRate: <TagFacesIcon /> },
        { label: "React JS", strengthRate: <TagFacesIcon /> },
        { label: "Spring Boot", strengthRate: <SentimentSatisfiedAltIcon /> },
    ];

    const databases: { label: string; strengthRate: any }[] = [
        { label: "SQL Server", strengthRate: <TagFacesIcon /> },
        { label: "PostgreSQL", strengthRate: <SentimentSatisfiedAltIcon /> },
    ];

    const others: { label: string; strengthRate: any }[] = [
        { label: "Linux", strengthRate: <TagFacesIcon /> },
        { label: "VS Code", strengthRate: <TagFacesIcon /> },
        { label: "Visual Studio", strengthRate: <TagFacesIcon /> },
        { label: "Pycharm", strengthRate: <TagFacesIcon /> },
        { label: "Docker", strengthRate: <TagFacesIcon /> },
        { label: "Git", strengthRate: <TagFacesIcon /> },
        {
            label: "RabbitMQ/ Apache Kafka",
            strengthRate: <SentimentSatisfiedAltIcon />,
        },
    ];

    return (
        <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
            <h3>Programming Languages</h3>

            <Grid container spacing={2}>
                {programmingLanguages.map((name) => {
                    return (
                        <Grid item>
                            <Chip
                                icon={name.strengthRate}
                                label={name.label}
                                variant="outlined"
                                sx={{ fontFamily: "'Nunito', sans-serif" }}
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <h3>Web Frameworks</h3>

            <Grid container spacing={2}>
                {webFrameworks.map((name) => {
                    return (
                        <Grid item>
                            <Chip
                                icon={name.strengthRate}
                                label={name.label}
                                variant="outlined"
                                sx={{ fontFamily: "'Nunito', sans-serif" }}
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <h3>Databases</h3>

            <Grid container spacing={2}>
                {databases.map((name) => {
                    return (
                        <Grid item>
                            <Chip
                                icon={name.strengthRate}
                                label={name.label}
                                variant="outlined"
                                sx={{ fontFamily: "'Nunito', sans-serif" }}
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <h3>Others</h3>

            <Grid container spacing={2}>
                {others.map((name) => {
                    return (
                        <Grid item>
                            <Chip
                                icon={name.strengthRate}
                                label={name.label}
                                variant="outlined"
                                sx={{ fontFamily: "'Nunito', sans-serif" }}
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <Stack spacing={1} sx={{ marginTop: "20px" }}>
                <Stack direction="row" spacing={1}>
                    <TagFacesIcon />
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif" }}>
                        Proficient
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <SentimentSatisfiedAltIcon />
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif" }}>
                        Good
                    </Typography>
                </Stack>
            </Stack>
        </div>
    );
};
