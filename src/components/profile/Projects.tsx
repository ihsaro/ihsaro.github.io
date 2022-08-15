import * as React from "react";

import {
    Link,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Zoom,
} from "@mui/material";

import FileCopyIcon from "@mui/icons-material/FileCopy";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Projects: React.FC = () => {
    const [repos, setRepos] = React.useState<any>([]);

    React.useEffect(() => {
        async function fetchGithubRepositories() {
            const response = await fetch(
                "https://api.github.com/users/ihsaro/repos"
            );
            const data = await response.json();
            setRepos(data);
        }
        fetchGithubRepositories();
    }, []);

    return (
        <TableContainer sx={{ margin: "20px", width: "91%" }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{
                                fontFamily: '"Nunito", sans-serif',
                                fontWeight: "bold",
                            }}
                        >
                            Title
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: '"Nunito", sans-serif',
                                fontWeight: "bold",
                            }}
                        >
                            Description
                        </TableCell>
                        <TableCell
                            align="right"
                            sx={{
                                fontFamily: '"Nunito", sans-serif',
                                fontWeight: "bold",
                            }}
                        >
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repos.map((repo: any) => (
                        <TableRow
                            key={repo.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontFamily: '"Nunito", sans-serif' }}
                            >
                                {repo.name}
                            </TableCell>
                            <TableCell
                                sx={{ fontFamily: '"Nunito", sans-serif' }}
                            >
                                {repo.description}
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontFamily: '"Nunito", sans-serif' }}
                            >
                                <Tooltip
                                    arrow
                                    title="Link to Github Repo"
                                    TransitionComponent={Zoom}
                                    placement="right"
                                >
                                    <Link
                                        color="inherit"
                                        href={repo.html_url}
                                        target="_blank"
                                    >
                                        <GitHubIcon
                                        />
                                    </Link>
                                </Tooltip>
                                {/* <Tooltip
                                    arrow
                                    title="Copy Git Clone Url"
                                    TransitionComponent={Zoom}
                                    placement="left"
                                >
                                    <Link
                                        color="inherit"
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <FileCopyIcon
                                            onClick={() =>
                                                alert(repo.clone_url)
                                            }
                                            style={{ padding: "5px" }}
                                        />
                                    </Link>
                                </Tooltip> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
