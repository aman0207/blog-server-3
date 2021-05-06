import React from "react";
import TagInputLogic from "./TagInputLogic";

// Material-UI components.
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  label: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  tagsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: theme.spacing(3),
    "& > *": {
      margin: theme.spacing(0.3),
    },
  },
}));

export const TAG_ACTION = {
  ADD: "add",
  REMOVE: "remove",
};

const TagInputComponent = (props) => {
  const style = useStyles();
  const { allTags, tagFieldName, tagSizes, formSyncFunc } = props;

  // business logic of this component.
  const [isTagApplied, updateTags] = TagInputLogic();

  return (
    <React.Fragment>
      <div className={style.label}>
        <InputLabel>{tagFieldName}</InputLabel>
      </div>
      <div className={style.tagsContainer}>
        {allTags.map((tag) => (
          <Chip
            color={isTagApplied(tag) ? "primary" : "default"}
            key={tag}
            label={tag}
            variant={isTagApplied(tag) ? "default" : "outlined"}
            size={tagSizes === undefined ? "medium" : tagSizes}
            onClick={() => updateTags(TAG_ACTION.ADD, tag, formSyncFunc)}
            onDelete={() => updateTags(TAG_ACTION.REMOVE, tag, formSyncFunc)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TagInputComponent;
