import Article from "../../../models/Article";
import dbConnect from "../../../utils/dbConnect";
import { REQUEST } from "../../../common/variables";
import { fetchSingleRecordByID } from "../../../db_driver_interfaces/mongoose/read_op";
import { updateSingleRecordByID } from "../../../db_driver_interfaces/mongoose/update_op";

// Establishing database connection (ONLY if it isn't).
dbConnect();

// For fetching, updating, (rarely) deleting a specific Article based on its ID.
export default async function requestHandler(request, response) {
  const id = request.query.id;
  console.debug("ID: " + id);

  const outputFields =
    "title author date category tags body createdOn updatedOn titleImage";

  switch (request.method) {
    case REQUEST.GET:
      const articleDetails = await fetchSingleRecordByID(
        Article,
        id,
        outputFields
      );
      if (articleDetails) {
        console.info(
          "[pages/api/article/[id].js, 'requestHandler()'] Article fetched."
        );
        console.debug(articleDetails);
        response.status(200).json({ success: true, data: articleDetails });
      } else {
        console.error(
          "[pages/api/article/[id].js, 'requestHandler()'] Article fetching failed."
        );
        response.status(503).json({ success: false });
      }
      break;

    case REQUEST.UPDATE:
      const updates = request.body;
      console.debug("Request body: " + JSON.stringify(updates));

      const updatedArticle = await updateSingleRecordByID(Article, id, updates);
      if (updatedArticle) {
        console.info(
          "[pages/api/article/[id].js, 'requestHandler()'] Article updated."
        );
        console.debug(updatedArticle);
        response.status(200).json({ success: true, data: updatedArticle });
      } else {
        console.error(
          "[pages/api/article/[id].js, 'requestHandler()'] Article updating failed."
        );
        response.status(503).json({ success: false });
      }
      break;

    default:
      response.status(400).json({ success: false });
  }
}
