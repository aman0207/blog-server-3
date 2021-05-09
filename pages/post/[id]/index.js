import { Paper } from "@material-ui/core";
import Image from "next/image";

const fetchArticles = async (id) => {
  console.debug("POST [id] fetchArticles : id : ", id);
  const res = await fetch(`http://localhost:3000/api/article/${id}`);
  // const data = await res.json();
  // console.debug("POST [id] fetchArticles : ", data);
  return res.json();
};

const viewPost = ({ article }) => {
  console.info("POST [id] : ", article);

  return (
    <Paper>
      <h1>{article.data.title}</h1>
      {article.data.titleImage && (
        <Image
          src={article.data.titleImage}
          alt="Picture of the Article"
          width={500}
          height={500}
          unoptimized
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: article.data.body }} />
    </Paper>
  );
};

export const getServerSideProps = async (context) => {
  const article = await fetchArticles(context.params.id);
  console.debug("POST [id] getServerSideProps : ", article);
  return {
    props: { article }, // will be passed to the page component as props
  };
};

export default viewPost;
