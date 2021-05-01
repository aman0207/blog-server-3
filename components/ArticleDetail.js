import { Container, makeStyles, Paper } from "@material-ui/core";
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

const ArticleDetail = () => {
  const styles = useStyles();
  return (
    <Container>
      <Paper variant="outlined" square className={styles.blogContainer}>
        <Paper className={styles.blogInnerContainer}>
          <Image src="/sample1.jpg" alt="Image" width={350} height={350} />
          <h1>Benefits of Repetition</h1>
          <h3>
            April 5, 2021 by <Link href="/about">Shikar</Link>
          </h3>
          <p>
            As a school kid, I used to write quotations on the cover page of our
            notebook, while starting a new chapter. One of those was:
          </p>
          <blockquote>
            <p className="styles.quotePara">“Practice makes a man perfect.”</p>
          </blockquote>
          <p>
            It is only consistency in our life that makes us successful. We
            cannot even dream about getting success if we are not consistent in
            what we do. Consistency plays a salient role in our life. One can
            notice that the most consistent people live the most satisfactory
            lives. So, being consistent means being repetitive in what we do. In
            another post, I had already discussed about repetition. Now, let us
            talk about some of the benefits of repetition. If we practice the
            right thing in the right manner, then all the ways to zenith are
            ours.
          </p>
        </Paper>
      </Paper>
    </Container>
  );
};

export default ArticleDetail;
