import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import { styled } from "@material-ui/core/styles";
export const Nav = () => {
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/">
          <Button>Short Stories</Button>
        </Link>
        <Link href="/article">
          <Button>Articles</Button>
        </Link>
        <Link href="/about">
          <Button>About Us</Button>
        </Link>
        <Link href="/">
          <Button>Book</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
