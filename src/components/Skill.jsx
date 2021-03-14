import { Box, Grid, Typography, LinearProgress, Paper } from "@material-ui/core";

import "./css/CardSectionCommon.css";

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
}

export default function Skill() {
    return (
        <Paper square elevation={0} className="card-section-only-margin">
            <Grid
                container
                direction="row"
            >
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel value={20} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel value={20} />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <LinearProgressWithLabel value={20} />
                </Grid>
            </Grid>
        </Paper>
    )
}