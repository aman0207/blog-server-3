import { Paper } from "@material-ui/core";
import Image from "next/image";

const ArticleDetail = () => {
  return (
    <Paper variant="outlined" square>
      <Image src="/sample1.jpg" alt="Image" width={500} height={500} />
    </Paper>
  );
};

export default ArticleDetail;
