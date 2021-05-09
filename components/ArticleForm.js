import React, { useState } from "react";
import dynamic from "next/dynamic";
// Material-UI components
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// App components
import TagInput from "../components/tagInput/TagInputView";
import { Input, InputLabel } from "@material-ui/core";
//import RichTextEditor from "../components/richTextEditor/RichTextEditor";
const RichTextEditor = dynamic(
  () => import("../components/richTextEditor/RichTextEditor"),
  {
    ssr: false,
  }
);

// DUMMY TAGS
function getListOfTags() {
  return ["Important", "Technology", "Fiction", "Life", "Exclusive", "Author"];
}

// [DUMMY FUNCTION]
// mocking a user login session, whose username is being used.
function getAuthorName() {
  const userLoggedIn = true;

  if (userLoggedIn) return "Aman";
  else return "Guest";
}

// [DUMMY FUNCTION]
// enables or disables the 'author' field depending on...
// whether a user is logged in or not.
function ifNoLogin() {
  const activeUser = getAuthorName();
  return activeUser === "Guest" ? false : true;
}

const FIELDS = {
  TITLE: "title",
  AUTHOR: "author",
  CATEGORY: "category",
};

const useStyles = makeStyles((theme) => ({
  allSideMildMargin: {
    display: "block",
    margin: theme.spacing(1),
  },
  mildTopMargin: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  nominalVerticalMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function ArticleForm() {
  const style = useStyles();

  // input field state controllers.
  const [author, setAuthor] = useState(getAuthorName());
  const [tags, setTags] = useState([]);
  const [articleBody, setArticleBody] = useState({});
  const resetData = () => {
    console.debug("Record Reset ");
    setArticleBody({
      title: "",
      category: "",
      body: "",
    });
    setTags([]);
  };
  async function storeRecord() {
    let reqBodyToStore = articleBody;
    reqBodyToStore = {
      ...reqBodyToStore,
      tags: tags,
      status: "N",
      createdOn: new Date(),
      author: "TestUser",
    };
    console.info("RECORED TO STORE : ", reqBodyToStore);
    const reqOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(reqBodyToStore),
    };
    const resp = await fetch(
      "http://localhost:3000/api/article/new",
      reqOptions
    );
    const savedArticle = await resp.json();
    console.debug("savedArticle : ", savedArticle);
    resetData();
  }

  const assignArticleBody = (contents) => {
    setArticleBody((prevState) => ({
      ...prevState,
      body: contents,
    }));
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const updateFileField = async (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    console.info("updateFileField :: fieldName" + fieldName);
    console.info("updateFileField :: fieldValue" + fieldValue);
    console.info(
      "updateFileField :: files : length : " + event.target.files?.length
    );
    let base64 = "";
    if (event.target.files?.length > 0) {
      const file = event.target.files[0];
      base64 = await convertBase64(file);
    }

    console.log(base64);
    setArticleBody((prevState) => ({
      ...prevState,
      titleImage: base64,
    }));
  };

  function updateTextField(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    switch (fieldName) {
      case FIELDS.TITLE:
        //setTitle(fieldValue);
        setArticleBody((prevState) => ({
          ...prevState,
          title: fieldValue,
        }));
        break;
      case FIELDS.AUTHOR:
        setAuthor(fieldValue);
        setArticleBody((prevState) => ({
          ...prevState,
          author: fieldValue,
        }));
        break;
      case FIELDS.CATEGORY:
        // setCategory(fieldValue);
        setArticleBody((prevState) => ({
          ...prevState,
          category: fieldValue,
        }));
        break;
      default:
        console.error("Invalid field input");
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h3">New Article</Typography>

      <form autoComplete="off">
        {/* TITLE OF THE ARTICLE */}
        <TextField
          name="title"
          label="Title"
          size="small"
          variant="outlined"
          value={articleBody.title}
          onChange={updateTextField}
          fullWidth
          className={style.nominalVerticalMargin}
        />
        <InputLabel>Title Image</InputLabel>
        <Input
          accept="image/*"
          type="file"
          name="titleImage"
          onChange={updateFileField}
          placeholder="Title Image"
          label="Title Image"
          fullWidth
        />

        {/* AUTHOR OF THE ARTICLE */}
        {/* Gets auto filled with username who is logged in */}
        {/* if nobody is logged in, default value is 'Guest' which can be changed */}
        <TextField
          name="author"
          label="Author"
          size="small"
          variant="outlined"
          fullWidth
          defaultValue={author}
          disabled={ifNoLogin()}
          className={style.nominalVerticalMargin}
        />

        {/* CATEGORY FOR THE ARTICLE */}
        <TextField
          name="category"
          label="Category"
          size="small"
          variant="outlined"
          value={articleBody.category}
          onChange={updateTextField}
          fullWidth
          className={style.nominalVerticalMargin}
        />

        {/* BODY FOR THE ARTICLE */}
        <RichTextEditor
          editorFieldName="Article Contents"
          formSyncFunc={assignArticleBody}
          editorDefaultData={articleBody.body}
        />

        {/* TAGS FOR THE ARTICLE */}
        <TagInput
          tagFieldName="Article Tags"
          allTags={getListOfTags()}
          tagSizes="small"
          formSyncFunc={setTags}
        />

        {/* NOTICE OR OTHER ACKNOWLEDGEMENTS */}
        <Typography variant="body2">
          The above article will be created and saved as defined. However,
          creating the article will not result in immediate publishing. An
          article is only published on the website once the Administrator has
          reviewed it. The author of the article will be informed via email or
          other means about its status.
        </Typography>

        {/* SUBMIT BUTTON */}
        <Button
          className={style.mildTopMargin}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            storeRecord();
          }}
        >
          Create
        </Button>
        {/*Reset Button */}
        <Button
          className={style.mildTopMargin}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            resetData();
          }}
        >
          Reset
        </Button>
      </form>
    </React.Fragment>
  );
}
