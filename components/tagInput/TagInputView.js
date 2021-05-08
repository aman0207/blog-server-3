import React from "react";
import TagInputLogic from "./TagInputLogic";

// Material-UI components.
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  mildTopMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  centeredContent: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(0.3),
    },
  },
  almostFullWidth: {
    width: "90%",
    marginTop: theme.spacing(0.5),
  },
  nominalVerticalMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const TAG_ACTION = {
  ADD: "add",
  REMOVE: "remove",
};

const TagInputViewComponent = (props) => {
  const style = useStyles();
  const { allTags, tagFieldName, tagSizes, formSyncFunc } = props;

  const [method, value] = TagInputLogic(allTags);

  return (
    <React.Fragment>
      <div className={style.mildTopMargin}>
        <InputLabel>{tagFieldName}</InputLabel>
      </div>
      <div className={style.nominalVerticalMargin}>
          <TextField
            className={style.almostFullWidth}
            size="small"
            name="newTag"
            variant="outlined"
            label="New Tag Name"
            value={value.newTagName}
            onChange={method.updateNewTagInputValue}
            error={(value.isNewTagNameValid)? false : true}
            helperText={(value.isNewTagNameValid)? '' : 'Tag Exists'}
          />

        <Button
          color="secondary"
          onClick={method.createNewTag}
        >
          Add
        </Button>
      </div>
      <div className={style.centeredContent}>
        {value.existingTags.map((tag) => (
          <Chip
            color={method.isTagApplied(tag) ? "primary" : "default"}
            key={tag}
            label={tag}
            variant={method.isTagApplied(tag) ? "default" : "outlined"}
            size={tagSizes === undefined ? "medium" : tagSizes}
            onClick={() => method.updateAppliedTags(TAG_ACTION.ADD, tag, formSyncFunc)}
            onDelete={() => method.updateAppliedTags(TAG_ACTION.REMOVE, tag, formSyncFunc)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TagInputViewComponent;
