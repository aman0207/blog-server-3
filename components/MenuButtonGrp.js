import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  IconButton,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Brightness4Sharp, Brightness7Sharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    color: "#ffd73a",
    flexFlow: "column",
  },
  margin: {
    margin: theme.spacing(1),
    color: "#ffd73a",
  },
  menuWidth: {
    width: "100%",
  },
  heading: {
    color: "#ffd73a",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  blackBckgrnd: {
    backgroundColor: "black",
  },
}));

const MenuButtonGrp = ({ changeTheme, darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <Accordion
      className={classes.blackBckgrnd}
      expanded={expanded}
      onClick={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Menu</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.root}>
        <Link href="/">
          <Button size="large" className={classes.margin}>
            Home
          </Button>
        </Link>
        <Link href="/articles">
          <Button size="large" className={classes.margin}>
            Short Stories
          </Button>
        </Link>
        <Link href="/articles">
          <Button size="large" className={classes.margin}>
            Articles
          </Button>
        </Link>
        <Link href="/about">
          <Button size="large" className={classes.margin}>
            About Us
          </Button>
        </Link>
        <Link href="/about">
          <Button size="large" className={classes.margin}>
            Book
          </Button>
        </Link>
        <IconButton
          onClick={() => changeTheme(!darkMode)}
          className={classes.margin}
          title="Toggle Light/Dark Theme"
        >
          {darkMode ? (
            <Brightness4Sharp fontSize="default" />
          ) : (
            <Brightness7Sharp fontSize="default" />
          )}
        </IconButton>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuButtonGrp;
