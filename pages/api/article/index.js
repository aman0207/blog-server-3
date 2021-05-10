import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/Article";
import { REQUEST } from "../../../common/variables";

dbConnect();

export default async function handler(req, resp) {
  const { method } = req;
  switch (method) {
    case REQUEST.GET:
      try {
        const articles = await Article.find({});
        resp.status(200).json({ success: true, data: articles });
        console.info("[pages/api/article/index.js, 'handler()'] Articles found");
        console.debug(articles);
      } catch (error) {
        console.error("[pages/api/article/index.js, 'handler()'] Error finding Articles");
        console.debug(error);
        resp.status(400).json({ success: false });
      }
      break;
    case REQUEST.POST:
      try {
        console.debug("Request body: " + JSON.stringify(req.body));
        const article = await Article.create(req.body);
        resp.status(200).json({ success: true, data: article });
        console.info("[pages/api/article/index.js, 'handler()'] Articles Created");
      } catch (error) {
        console.error("[pages/api/article/index.js, 'handler()'] Articles Creation Failed");
        console.debug("Error: " + error);
        resp.status(400).json({ success: false });
      }
      break;
    default:
      resp.status(400).json({ success: false });
  }
}
