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
  margin: {
    margin: theme.spacing(1),
    color: "#ffd73a",
  },
  flexFlowColumn: {
    display: "flex",
    flexFlow: "column",
  },
  blackBckgrnd: {
    backgroundColor: "black",
  },
}));

const Nav = ({ changeTheme, darkMode }) => {
  const currentTheme = useTheme();
  const isMatch = useMediaQuery(currentTheme.breakpoints.down("sm"));

  //console.log(thh);
  console.log(isMatch);
  const classes = useStyles();
  return (
    <AppBar position={"static"} className={classes.blackBckgrnd}>
      <Toolbar className={classes.flexFlowColumn}>
        <Link href="/">
          <div>
            <Image
              src="/sample-logo.jpeg"
              alt="Image"
              width={200}
              height={100}
            />
          </div>
        </Link>

        {isMatch ? (
          <MenuButtonGrp changeTheme={changeTheme} darkMode={darkMode} />
        ) : (
          <div>
            <Link href="/">
              <Button className={classes.margin}>Home</Button>
            </Link>
            <Link href="/test">
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
            <Link href="/textEditor">
              <Button size="large" className={classes.margin}>
                Text Editor
              </Button>
            </Link>
            <Link href="/textViewer">
              <Button size="large" className={classes.margin}>
                Text Viewer
              </Button>
            </Link>
            {/* <SplitButton /> */}

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
            {/* <MenuButtonGrp /> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
