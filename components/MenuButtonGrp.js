import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const MenuButtonGrp = () => {
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
        <Link href="/">
          <Button size="large" className={classes.margin}>
            Short Stories
          </Button>
        </Link>
        <Link href="/article">
          <Button size="large" className={classes.margin}>
            Articles
          </Button>
        </Link>
        <Link href="/about">
          <Button size="large" className={classes.margin}>
            About Us
          </Button>
        </Link>
        <Link href="/">
          <Button size="large" className={classes.margin}>
            Book
          </Button>
        </Link>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuButtonGrp;
