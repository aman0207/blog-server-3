import React, { useState } from "react";

// Material-UI components
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// App components
import TagInput from "../components/tagInput/TagInputView";

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
  }
}));

export default function ArticleForm() {
  const style = useStyles();

  // input field state controllers.
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(getAuthorName());
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);

  function updateTextField(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    switch (fieldName) {
      case FIELDS.TITLE:
        setTitle(fieldValue);
        break;
      case FIELDS.AUTHOR:
        setAuthor(fieldValue);
        break;
      case FIELDS.CATEGORY:
        setCategory(fieldValue);
        break;
      default:
        console.error("Invalid field input");
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h3">New Article</Typography>

      <form autoComplete="off" >
        {/* TITLE OF THE ARTICLE */}
        <TextField
          name="title"
          label="Title"
          value={title}
          onChange={updateTextField}
          fullWidth
        />

        {/* AUTHOR OF THE ARTICLE */}
        {/* Gets auto filled with username who is logged in */}
        {/* if nobody is logged in, default value is 'Guest' which can be changed */}
        <TextField
          name="author"
          label="Author"
          fullWidth
          defaultValue={author}
          disabled={ifNoLogin()}
        />

        {/* CATEGORY FOR THE ARTICLE */}
        <TextField
          name="category"
          label="Category"
          value={category}
          onChange={updateTextField}
          fullWidth
        />

        {/* TAGS FOR THE ARTICLE */}
        <TagInput
          tagFieldName="Article Tags"
          allTags={getListOfTags()}
          tagSizes="medium"
          formSyncFunc={setTags}
        />

        {/* BODY FOR THE ARTICLE */}

        {/* SUBMIT BUTTON */}
        <Button
          className={style.allSideMildMargin}
          variant="contained"
          color="primary"
          onClick={() => {
            console.info({
              title: title,
              author: author,
              category: category,
              tags: tags,
              createdOn: new Date(),
              published: false,
            });
          }}
        >
          Create 
        </Button>
      </form>
    </React.Fragment>
  );
}
