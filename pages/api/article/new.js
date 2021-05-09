import Article from "../../../models/Article";
import dbConnect from "../../../utils/dbConnect";
import logger from "../../../utils/logger";
import { createNewRecord } from "../../../db_driver_interfaces/mongoose/create_op";

// Establishing connection (ONLY if it isn't already).
dbConnect();

// For creating a new Article ONLY.
export default async function requestHandler(request, response) {
  const newArticleData = request.body;
  logger.debug("Request Body: " + newArticleData);

  // creating new document of type Article.
  const newArticle = new Article(newArticleData);
  const articleDetails = await createNewRecord(newArticle);

  if (articleDetails) {
    logger.debug("Article Created: " + articleDetails);
    response.status(200).json({ success: true, data: articleDetails });
  } else {
    response.status(503).json({ success: false });
  }
}
