import * as React from "react";

import { Button, Grid, Link, Paper, Stack } from "@mui/material";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import HandymanIcon from "@mui/icons-material/Handyman";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

import { Education } from "components/profile/Education";
import { Projects } from "components/profile/Projects";
import { Skills } from "components/profile/Skills";
import { WorkExperience } from "components/profile/WorkExperience";

import "styles/Profile.css";

enum Features {
    EDUCATION,
    SKILLS,
    WORK_EXPERIENCE,
    PROJECTS,
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ProfileComponent: React.FC = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const [currentFeature, setCurrentFeature] = React.useState<Features>(
        Features.SKILLS
    );

    const features: { name: Features; component: any }[] = [
        { name: Features.EDUCATION, component: <Education /> },
        { name: Features.SKILLS, component: <Skills /> },
        { name: Features.PROJECTS, component: <Projects /> },
        { name: Features.WORK_EXPERIENCE, component: <WorkExperience /> },
    ];

    return (
        <Stack
            className="parent-stack"
            direction={{ sm: "column", lg: "row" }}
            spacing={10}
            justifyContent="center"
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
                width: "100%",
                minHeight: "90vh",
            }}
        >
            <Paper
                elevation={0}
                style={{ textAlign: "center", height: "100%" }}
            >
                <img
                    className="profile-picture"
                    src={process.env.PUBLIC_URL + "/profile_picture.jpg"}
                    alt="Idjaz Hossanee"
                />
                <h2>HOSSANEE Muhammad Idjaz Ali</h2>
                <p>
                    Software Developer III At Ceridian Mauritius | Open Source
                    Enthusiast
                </p>
                <Stack direction="row" spacing={5} justifyContent="center">
                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167"
                    >
                        <LinkedInIcon />
                    </Link>
                    <Link target="_blank" href="https://github.com/ihsaro">
                        <GitHubIcon />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.facebook.com/idjaz.hossanee.90"
                    >
                        <FacebookIcon />
                    </Link>
                </Stack>
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === "dark" ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
                {theme.palette.mode} mode
            </Paper>
            <Paper elevation={0} sx={{ height: "100%" }}>
                <Stack direction="column">
                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        sx={{ marginTop: "5px" }}
                    >
                        <Grid item>
                            <Button
                                color="primary"
                                startIcon={<HandymanIcon />}
                                variant={
                                    currentFeature === Features.SKILLS
                                        ? "contained"
                                        : "outlined"
                                }
                                onClick={(e) => {
                                    setCurrentFeature(Features.SKILLS);
                                }}
                            >
                                Skills
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                startIcon={<AutoStoriesIcon />}
                                variant={
                                    currentFeature === Features.EDUCATION
                                        ? "contained"
                                        : "outlined"
                                }
                                onClick={(e) => {
                                    setCurrentFeature(Features.EDUCATION);
                                }}
                            >
                                Education
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                startIcon={<BusinessCenterIcon />}
                                variant={
                                    currentFeature === Features.WORK_EXPERIENCE
                                        ? "contained"
                                        : "outlined"
                                }
                                onClick={(e) => {
                                    setCurrentFeature(Features.WORK_EXPERIENCE);
                                }}
                            >
                                Work Experience
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                startIcon={<AccountTreeIcon />}
                                variant={
                                    currentFeature === Features.PROJECTS
                                        ? "contained"
                                        : "outlined"
                                }
                                onClick={(e) => {
                                    setCurrentFeature(Features.PROJECTS);
                                }}
                            >
                                Projects
                            </Button>
                        </Grid>
                    </Grid>
                    <Paper elevation={0}>
                        {
                            features.find((e) => e.name === currentFeature)
                                ?.component
                        }
                    </Paper>
                </Stack>
            </Paper>
        </Stack>
    );
};

function Profile() {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <ProfileComponent />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Profile;
