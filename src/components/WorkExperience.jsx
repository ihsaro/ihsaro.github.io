import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles({
	cardSectionOnlyMargin: {
    margin: "20px"
  },
  workExperienceFont: {
    fontFamily: "'Montserrat', sans-serif",
  },
  workExperienceTitleFont: {
    fontWeight: "bold"
  }
});

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(title, company, yearsWorked, technologiesWorkedWith, comments) {
  return {
    title,
    company,
    yearsWorked,
    technologiesWorkedWith,
    comments
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const stylesClasses = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={stylesClasses.workExperienceFont} component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell className={stylesClasses.workExperienceFont} align="right">{row.company}</TableCell>
        <TableCell className={stylesClasses.workExperienceFont} align="right">{row.yearsWorked}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
        </TableCell>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Typography className={stylesClasses.workExperienceFont} gutterBottom component="div">
                <label className={stylesClasses.workExperienceTitleFont}>Technologies worked with: </label>{row.technologiesWorkedWith}
                <br />
                <br />
                <label className={stylesClasses.workExperienceTitleFont}>Comments: </label>{row.comments}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
	createData(
    'Software Developer', 
    'CERIDIAN MAURITIUS', 
    'JAN 2021 - PRESENT',
    'C#, Typescript, Javascript, Dojo, MSSQL, XML/ XSD, JSON, HTML, Stylus, Specflow, Selenium Coypu',
    'Being currently a software developer, I am being exposed to more challenging experiences using the same suite of technologies.'
  ),
	createData(
    'Associate Software Developer', 
    'CERIDIAN MAURITIUS', 
    'JUN 2019 - DEC 2020',
    'C#, Typescript, Javascript, Dojo, MSSQL, XML/ XSD, JSON, HTML, Stylus, Specflow, Selenium Coypu',
    'Maintained existing solutions using C#, Dojo, HTML, Stylus, SQL and XML/XSD as well as implementing new functionalities using the same technologies. During this role, I also implemented the UI automation framework for my team\'s project, using specflow and selenium, which was challenging, but a fun and fulfilling experience.'
  ),
	createData(
    'Freelance Webmaster', 
    'PROXIMITY BBDO MAURITIUS', 
    'MAY 2016 - SEP 2016',
    'Sitecore, HTML, CSS',
    'Maintained websites using the Sitecore CMS. Mainly edited contents with basic HTML since the architecture was already in place.'
  ),
];

export default function WorkExperience() {

  const classes = useStyles();

	return (
    <Paper square elevation={0} className={classes.cardSectionOnlyMargin}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className={`${classes.workExperienceFont} ${classes.workExperienceTitleFont}`}>JOB TITLE</TableCell>
              <TableCell className={`${classes.workExperienceFont} ${classes.workExperienceTitleFont}`} align="right">COMPANY</TableCell>
              <TableCell className={`${classes.workExperienceFont} ${classes.workExperienceTitleFont}`} align="right">YEARS</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
            {rows.map((row) => (
              <Row key={row.title} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  	);
}
