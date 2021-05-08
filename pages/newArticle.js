import React from "react";

// Material-UI components
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import ArticleForm from "../components/ArticleForm";
import { Paper } from "@material-ui/core";

const NewArticlePage = () => {
  return (
    <Paper>
      <Grid container spcaing={2}>
        {/* Offset(left), only on medium and above screen sizes */}
        <Hidden smDown>
          <Grid item md={1} lg={3}></Grid>
        </Hidden>

        {/* Editor Container */}
        <Grid item xs={12} md={10} lg={6}>
          <ArticleForm />
        </Grid>

        {/* Offset(right), only on medium and above screen sizes */}
        <Hidden smDown>
          <Grid item md={1} lg={3}></Grid>
        </Hidden>
      </Grid>
    </Paper>
  );
};

export default NewArticlePage;
