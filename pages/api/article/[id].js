import Article from "../../../models/Article";
import { REQUEST } from "../../../common/variables";
import { fetchSingleRecordByID } from "../../../db_driver_interfaces/mongoose/read_op";
import { updateSingleRecordByID } from "../../../db_driver_interfaces/mongoose/update_op";

// For fetching, updating, (rarely) deleting a specific Article based on its ID.
export default async function requestHandler(request, response) {
  const id = request.query.id;  
  const outputFields = 'title author date category tags body createdOn updatedOn';

  switch (request.method) {
    case REQUEST.GET:
      const articleDetails = await fetchSingleRecordByID(Article, id, outputFields);
      if (articleDetails) response.status(200).json({ success: true, data: articleDetails });
      response.status(503).json({ success: false, data: error });
      break;
    case REQUEST.UPDATE:
      const updates = request.body;
      const updatedArticle = await updateSingleRecordByID(Article, id, updates)
      if (updatedArticle) response.status(200).json({ success: true, data: updatedArticle });
      response.status(503).json({ success: false, data: error });
      break;
    default:
      response.status(400).json({ success: false });
  }
}
