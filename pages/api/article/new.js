import Article from "../../../models/Article";
import { createNewRecord } from "../../../db_driver_interfaces/mongoose/create_op";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

// For fetching, updating, (rarely) deleting a specific Article based on its ID.
export default async function requestHandler(request, response) {
  try {
    console.log("NEW request started");
    const newArticleData = request.body;
    console.log("NEW request body", newArticleData);

    //const newArticle = new Article(newArticleData);
    //const articleDetails = await createNewRecord(newArticle);
    const articleDetails = await Article.create(request.body);
    console.log("DEV articleDetails :", articleDetails);
    if (articleDetails)
      response.status(200).json({ success: true, data: articleDetails });
  } catch (error) {
    response.status(503).json({ success: false, data: error });
  }
}
