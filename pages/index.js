import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { ArticleModel } from "../components/ArticleModel";
//import { styled } from "@material-ui/core/styles";
import testStyle from "../styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  inline: {
    display: "inline",
  },
  mainTest: {
    backgroundColor: theme.palette.background.paper,
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="keywords" content="web,material" />
      </Head>
      <div className={classes.mainTest}>
        <List className={classes.root}>
          {arr.map((item) => {
            return (
              <Link href="/article">
                <ListItem key={`${item}`}>
                  <ArticleModel />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    </>
  );
}
