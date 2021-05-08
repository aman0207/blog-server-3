import { Paper, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { useEffect, useState } from "react";

const fetchAllArticles = async () => {
  const resp = await fetch(`http://localhost:3000/api/article`);
  return resp.json();
};

const test = ({ data }) => {
  return (
    <Paper>
      I am a test page ? fields=id,title
      <pre>{JSON.stringify(data)}</pre>
      <List>
        {data.data.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default test;
export async function getStaticProps() {
  const dataStr = `{"success":true,"data":[{"tags":[],"_id":"608ed12f71b852795702af60","title":"Hello World","body":"Hello World","__v":0},{"tags":[],"_id":"608edf985db5868536c976d5","title":"Title11 Sun May 02 2021 22:51:20 GMT+0530 (India Standard Time)","body":"","__v":0},{"tags":[],"_id":"608edfb65db5868536c976d6","title":"Title11 Sun May 02 2021 22:51:58 GMT+0530 (India Standard Time)","body":"","__v":0},{"tags":[],"_id":"608ee07677eec585a98ed468","title":"Title11 Sun May 02 2021 22:55:04 GMT+0530 (India Standard Time)","__v":0},{"tags":[],"_id":"608ee0a277eec585a98ed469","title":"Title11 Sun May 02 2021 22:55:54 GMT+0530 (India Standard Time)","__v":0},{"tags":[],"_id":"608ee1def224d28696da7ffc","title":"Title11 2","__v":0},{"tags":[],"_id":"608ee8015518151553b1e6b6","title":"Title11 Sun May 02 2021 23:27:19 GMT+0530 (India Standard Time)","__v":0},{"tags":[],"_id":"6090a2a896f6f1117b10840a","title":"Title11 Tue May 04 2021 06:55:55 GMT+0530 (India Standard Time)","__v":0},{"tags":[],"_id":"60955c9272bed1188099208c","title":"title11","body":"<div></div>","category":"category1","author":"Test User1","status":"y","__v":0},{"tags":[],"_id":"60955d6d7e70c919551546ef","title":"title12","body":"<div></div>","category":"category1","author":"Test User1","status":"y","__v":0},{"tags":[],"_id":"60955dedece83c1a2230fb68","title":"title13","body":"<div></div>","category":"category1","author":"Test User1","status":"y","__v":0},{"tags":["technology"],"_id":"6096848a4e57744b08a797e7","author":"TestUser","title":"Check Title 101","category":"Test Cateory 101","body":"<p>This is a Test Record 101</p>","status":"N","__v":0},{"tags":["important","technology"],"_id":"609686441e4fc24bad735f23","title":"Check Title 102","category":"Check Category 102","body":"<p>This is a test content <strong>102</strong></p>","status":"N","createdOn":"2021-05-08T12:38:24.652Z","author":"TestUser","__v":0},{"tags":["life"],"_id":"6096885a77fa444d07b6da00","title":"Check Ttitle 103","category":"Check Category 103","body":"<p>Check Content <i>103</i></p><ol><li>Data 1</li><li>Data 2</li></ol>","status":"N","createdOn":"2021-05-08T12:47:19.813Z","author":"TestUser","__v":0}]}`;
  //const data1 = await fetchAllArticles();
  const data = JSON.parse(dataStr);
  console.info("getStaticProps : ", data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}
