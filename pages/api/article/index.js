import getTextEditorData1 from "../../../components/TestTextEditorData";
import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/Article";

dbConnect();

export default async function handler(req, resp) {
  const { method } = req;
  //console.log("ARTICLE : " + Article);
  switch (method) {
    case "GET":
      try {
        const articles = await Article.find({});
        resp.status(200).json({ success: true, data: articles });
        console.log(articles);
      } catch (error) {
        console.error(error);
        resp.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("req body : " + JSON.stringify(req.body));
        const article = await Article.create(req.body);
        resp.status(200).json({ success: true, data: article });
      } catch (error) {
        console.error(error);
        resp.status(400).json({ success: false });
      }
      break;
    default:
      resp.status(400).json({ success: false });
  }
  //resp.status(200).json({ data: "Hello World" });
  // const data = getTextEditorData1();
  // console.log("data : " + JSON.stringify(data));
  // resp.status(200).json(data);
}
