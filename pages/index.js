// App components.
import { ArticleModel } from "../components/ArticleModel";

// NextJS components.
import Head from "next/head";
import Link from "next/link";

// Material-UI components.
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// dummy information for (all) the Article Cards.
// equivalent function must exist to fetch articles information.
function getArticleInfo() {
  return {
    id: "1",
    image: "/images/sample1.jpg",
    title: "Benefits of Repetion",
    summary:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    author: "Shikhar",
    updated: "4th Jul, 21",
    // imageName : "sea horizon"  // serves as 'alt' property value for card-media.
  };
}

export default function Home() {
  const arr = [1, 2, 3, 4, 5];
  const articleInfo = getArticleInfo();

  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="keywords" content="web,material" />
        <link rel="icon" href="/sample-logo.jpeg"></link>
      </Head>
      <Grid container spacing={0}>
        {arr.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <List>
                <ListItem key={item}>
                  <Link href="/article">
                    <ArticleModel
                      title={articleInfo.title}
                      summary={articleInfo.summary}
                      image={articleInfo.image}
                      author={articleInfo.author}
                      updated={articleInfo.updated}
                    />
                  </Link>
                </ListItem>
              </List>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
