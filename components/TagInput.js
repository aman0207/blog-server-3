import React, { useState } from "react";

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

const TagInputComponent = (props) => {
  const style = useStyles();

  const allTags = props.allTags;  // list of tags to choose from.
  const tagFieldName = props.tagFieldName;
  const tagSizes = props.tagSizes? props.tagSizes : "small";

  // setter for this element value, defined in the parent form.
  const formUpdator = props.controller;

  // having own state for tags is required for toggling effect of the tags.
  const [tagsApplied, setTags] = useState([]);

  // returns new array without the tag that is to be removed.
  function removeTag(tagToBeRemoved) {
    let updatedTags = [];

    tagsApplied.forEach(tagApplied => {
      if (tagApplied !== tagToBeRemoved) updatedTags.push(tagApplied);
    });

    // updating the applied tags (in this component only).
    setTags(updatedTags);

    // updating the applied tags in the form(if exists) consisting this TagInput element.
    if (formUpdator !== undefined) formUpdator(updatedTags);
  }

  // add a new tag in the applied tag list.
  function includeTag(tagToBeAdded) {
    const updatedTags = [...tagsApplied, tagToBeAdded];

    // updating the applied tags (in this component only).
    setTags(updatedTags);

    // updating the applied tags in the form(if exists) consisting this TagInput element.
    if (formUpdator !== undefined) formUpdator(updatedTags);
  }

  // returns 'outlined' variant if the tag is not applied, else
  // returns the filled(default) variant.
  function getVariant(tagName) {
    if (tagsApplied.includes(tagName)) return "default";
    else return "outlined";
  }

  // returns 'primary' theme color if the tag is applied, else
  // returns the 'greyish' (default) theme color.
  function getColor(tagName) {
    if (tagsApplied.includes(tagName)) return "primary";
    else return "default";
  }

  return (
    <React.Fragment>
      <div className={style.label}>
        <InputLabel>{tagFieldName}</InputLabel>
      </div>
      <div className={style.tagsContainer}>
        {allTags.map((tag) => (
          <Chip
            color={getColor(tag)}
            key={tag}
            label={tag}
            variant={getVariant(tag)}
            size={tagSizes}
            onClick={() => includeTag(tag)}
            onDelete={() => removeTag(tag)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TagInputComponent;
