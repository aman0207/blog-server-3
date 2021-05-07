import Article from "../../../models/Article";
import { createNewRecord } from "../../../db_driver_interfaces/mongoose/create_op";

// For fetching, updating, (rarely) deleting a specific Article based on its ID.
export default async function requestHandler(request, response) {
  const newArticleData = request.body;

  const newArticle = new Article(newArticleData);
  const articleDetails = await createNewRecord(newArticle);
  if (articleDetails) response.status(200).json({ success: true, data: articleDetails });
  response.status(503).json({ success: false, data: error });
}

