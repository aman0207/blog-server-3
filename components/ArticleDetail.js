import { Container, makeStyles, Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    width: "100%",
  },
  blogInnerContainer: {
    display: "flex",
    flexFlow: "column",
    width: "55%",
    marginLeft: "15%",
    marginTop: "3%",
  },
  quotePara: {
    textAlign: "center",
  },
}));

const ArticleDetail = ({ article }) => {
  const styles = useStyles();
  return (
    <Container>
      <Paper variant="outlined" square className={styles.blogContainer}>
        <Paper className={styles.blogInnerContainer}>
          {/* <Image src="/sample1.jpg" alt="Image" width={350} height={350} /> */}
          <Typography component="h3" variant="h3">
            {article.data.title}
          </Typography>
          <Typography component="h6" variant="h6">
            {article.data.createdOn
              ? new Date(article.data.createdOn).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}{" "}
            by <Link href="/about">{article.data.author}</Link>
          </Typography>
          {article.data.titleImage && (
            <Image
              src={article.data.titleImage}
              alt="Picture of the Article"
              width={350}
              height={350}
              unoptimized
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: article.data.body }} />
          <Typography children={article.data.body} />
          <h1>HELP ME Please</h1>
        </Paper>
      </Paper>
    </Container>
  );
};

export default ArticleDetail;
