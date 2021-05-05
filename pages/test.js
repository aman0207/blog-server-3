import { Paper, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

const fetchAllArticles = async () => {
  const resp = await fetch(`http://localhost:3000/api/article`);
  return resp.json();
};

const test = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    let mount = true;
    fetchAllArticles().then((article) => {
      if (mount) {
        console.log("resp : " + JSON.stringify(article));
        setData(article);
      }
    });

    return () => {
      mount = false;
    };
  }, []);
  return (
    <Paper>
      I am a test page
      <pre>{JSON.stringify(data)}</pre>
      <Grid container spacing={0}></Grid>
    </Paper>
  );
};

export default test;
