import {
  AppBar,
  Button,
  IconButton,
  Paper,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import Link from "next/link";
import {
  makeStyles,
  styled,
  useTheme,
  withStyles,
} from "@material-ui/core/styles";
import { blueGrey, grey } from "@material-ui/core/colors";
import SplitButton from "./SplitButton";
import Image from "next/image";
import { Brightness4Sharp, Brightness7Sharp } from "@material-ui/icons";
import MenuButtonGrp from "./MenuButtonGrp";

const useStyles = makeStyles((theme) => ({
  lightTheme: {
    backgroundColor: blueGrey[300],
  },
  darkTheme: {
    backgroundColor: blueGrey[900],
  },
  margin: {
    margin: theme.spacing(1),
    color: "#ffd73a",
  },
  alignLeft: {
    alignItems: "right",
  },
  flexFlowColumn: {
    flexFlow: "column",
  },
  blackBckgrnd: {
    backgroundColor: "black",
  },
  whiteIconColor: {
    //color: "white",
    color: "#ffd73a",
  },
  blackIconColor: {
    color: "black",
  },
}));

export const Nav = ({ changeTheme, darkMode }) => {
  const currentTheme = useTheme();
  const isMatch = useMediaQuery(currentTheme.breakpoints.down("sm"));

  //console.log(thh);
  console.log(isMatch);
  const classes = useStyles();
  return (
    <AppBar position={"static"} className={classes.blackBckgrnd}>
      <Toolbar className={classes.flexFlowColumn}>
        <Link href="/">
          <Image
            src="/sample-logo.jpeg"
            alt="Image"
            width={200}
            height={100}
            className={classes.margin}
          />
        </Link>
        {isMatch ? (
          <MenuButtonGrp />
        ) : (
          <div className={classes.alignLeft}>
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
            {/* <SplitButton /> */}

            <IconButton
              onClick={() => changeTheme(!darkMode)}
              className={classes.whiteIconColor}
              title="Toggle Light/Dark Theme"
            >
              {darkMode ? (
                <Brightness4Sharp fontSize="large" />
              ) : (
                <Brightness7Sharp fontSize="large" />
              )}
            </IconButton>
            {/* <MenuButtonGrp /> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
