import React from "react";
import dynamic from "next/dynamic";

// Material-UI components
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// App components
import TagInput from "../../components/tagInput/TagInputView";
import ArticleFormLogic from "./articleFormLogic";
const RichTextEditor = dynamic(
  () => import("../../components/richTextEditor/RichTextEditor"),
  {
    ssr: false,
  }
);

// Styling for the Article form.
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

const ArticleForm = () => {
  const style = useStyles();
  const [method, articleData] = ArticleFormLogic();

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
          value={articleData.title}
          onChange={method.updateTextField}
          fullWidth
          className={style.nominalVerticalMargin}
        />

        {/* <InputLabel>Title Image</InputLabel>
        <Input
          accept="image/*"
          type="file"
          name="titleImage"
          onChange={method.updateFileField}
          placeholder="Title Image"
          label="Title Image"
          fullWidth
        /> */}

        {/* AUTHOR OF THE ARTICLE */}
        {/* Gets auto filled with username who is logged in */}
        <TextField
          name="author"
          label="Author"
          size="small"
          variant="outlined"
          fullWidth
          defaultValue={method.temporary.getAuthorName()}
          disabled={method.temporary.ifNoLogin()}
          className={style.nominalVerticalMargin}
        />

        {/* CATEGORY FOR THE ARTICLE */}
        <TextField
          name="category"
          label="Category"
          size="small"
          variant="outlined"
          value={articleData.category}
          onChange={method.updateTextField}
          fullWidth
          className={style.nominalVerticalMargin}
        />

        {/* BODY FOR THE ARTICLE */}
        <RichTextEditor
          editorFieldName="Article Contents"
          formSyncFunc={method.updateArticleBody}
          editorDefaultData={articleData.body}
        />

        {/* TAGS FOR THE ARTICLE */}
        <TagInput
          tagFieldName="Article Tags"
          allTags={method.temporary.getListOfTags()}
          tagSizes="small"
          formSyncFunc={method.setTags}
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
          onClick={method.createNewArticleRequest}
        >
          Create
        </Button>
        {/*Reset Button */}
        <Button
          className={style.mildTopMargin}
          variant="contained"
          size="small"
          color="primary"
          onClick={method.resetFormData}
        >
          Reset
        </Button>
      </form>
    </React.Fragment>
  );
};

export default ArticleForm;