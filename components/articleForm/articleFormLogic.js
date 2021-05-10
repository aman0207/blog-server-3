import { useState } from "react";
import Axios from "axios";
import { getAuthorName, getListOfTags, ifNoLogin } from "../../utils/temporary";

// article status (for tracking).
const ARTICLE_STATUS = {
  IN_REVIEW: "IN_REVIEW",
  IN_REVISION: "IN_REVISION",
  ACCEPTED: "ACCEPTED",
  PUBLISHED: "PUBLISHED",
  REJECTED: "REJECTED",
};

const ArticleFormLogic = () => {
  // input field state controllers.
  const [tags, setTags] = useState([]);
  const [articleData, setArticleData] = useState({});

  // updates 2 text fields, 'Title' and 'Category'.
  function updateTextField(event) {
    const newValue = event.target.value;
    const fieldName = event.target.name;

    if (fieldName === 'title')
      setArticleData((prevData) => ({
        ...prevData,
        title: newValue,
      }));
    else if (fieldName === 'category')
      setArticleData((prevData) => ({
        ...prevData,
        category: newValue,
      }));
    else console.error("Invalid field input");
  }

  // updates the Article contents (not the metadata) which would be displayed.
  const updateArticleBody = (contents) => {
    setArticleData((prevData) => ({
      ...prevData,
      body: contents,
    }));
  };

  // saves form data into the database (i.e. creates new article).
  async function createNewArticleRequest() {
    // new article record = article data + article metadata.
    const newArticleRecord = {
      ...articleData,
      tags,
      author: getAuthorName(),
      status: ARTICLE_STATUS.IN_REVIEW,
      createdOn: new Date(),
    };
    console.debug("New Article: " + JSON.stringify(newArticleRecord));

    // making the POST request for article creation.
    const result = await Axios.post('/api/article/new', newArticleRecord);
    if (result && result.success) console.info('Article form successfully submitted');
    else console.info('Article form submission failed');

    // ======================================================
    // let reqBodyToStore = articleData;
    // reqBodyToStore = {
    //   ...reqBodyToStore,
    //   tags: tags,
    //   status: "N",
    //   createdOn: new Date(),
    //   author: "TestUser",
    // };
    // console.info("RECORED TO STORE : ", reqBodyToStore);

    // const reqOptions = {
    //   method: "POST",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(reqBodyToStore),
    // };
    // const resp = await fetch(
    //   "http://localhost:3000/api/article/new",
    //   reqOptions
    // );
    // const savedArticle = await resp.json();
    // console.debug("savedArticle : ", savedArticle);
    // resetData();
    // ======================================================
  };

  // resets the Article data either after form submission or...
  // explicitly by pressing 'Reset' button.
  const resetFormData = () => {
    setArticleData({ title: "", category: "", body: "" });
    // author would be the logged in user, hence, cannot be reset.
    // resetting the applied tags. Although, the new tags that were...
    // recently created would be available to choose from that point onwards.
    setTags([]);
  };

  // returning the methods and variables that are used by the form UI.
  const method = {
    createNewArticleRequest,
    resetFormData,
    setTags,
    updateTextField,
    updateArticleBody,
    temporary: {
      getAuthorName,
      getListOfTags,
      ifNoLogin,
    }
  };

  return [method, articleData];
};

  // ======================================================
  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  // const updateFileField = async (event) => {
  //   const fieldValue = event.target.value;
  //   const fieldName = event.target.name;
  //   console.info("updateFileField :: fieldName" + fieldName);
  //   console.info("updateFileField :: fieldValue" + fieldValue);
  //   console.info(
  //     "updateFileField :: files : length : " + event.target.files?.length
  //   );

  //   let base64 = "";
  //   if (event.target.files?.length > 0) {
  //     const file = event.target.files[0];
  //     base64 = await convertBase64(file);
  //   }

  //   console.log(base64);
  //   setArticleBody((prevState) => ({
  //     ...prevState,
  //     titleImage: base64,
  //   }));
  // };
  // ======================================================

export default ArticleFormLogic;