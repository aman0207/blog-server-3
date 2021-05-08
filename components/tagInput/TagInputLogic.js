import { useState } from "react";

import { TAG_ACTION } from "./TagInputView";
import { removeArrayElement } from "../../utils/functions";

function allToLowerCase(elementsList) {
  let lowerCaseElements = [];

  elementsList.forEach(element => {
    lowerCaseElements.push(element.toLowerCase());
  });

  return lowerCaseElements;
}

const TagInputLogic = (tagsList) => {
  const [existingTags, setExistingTags] = useState(allToLowerCase(tagsList));

  const [appliedTags, applyTags] = useState([]);
  const [newTagName, setNewTagName] = useState('');
  const [isNewTagNameValid, setNewTagNameValidity] = useState(true);

  function isTagApplied(selectedTag) {
    return (appliedTags.includes(selectedTag))? true : false;
  }

  function updateAppliedTags(action, tag, formSyncFunc) {
    let updatedTags = [];  // list of tags after performing the action.

    switch(action) {
      case TAG_ACTION.ADD:
        // add tag only if it is not already included.
        if (!appliedTags.includes(tag)) updatedTags = [...appliedTags, tag];  
        else return;
      break;

      case TAG_ACTION.REMOVE:
        // removes tag only if it is already included.
        if (appliedTags.includes(tag)) updatedTags = removeArrayElement(appliedTags, tag);
        else return;
      break;
    }

    // UPDATING THE STATES AT DIFFERENT PLACES.
    if (formSyncFunc) formSyncFunc(updatedTags); // inside (parent) form, if exists.
    applyTags(updatedTags); // inside the component.
  }

  // creates an entirely new tag (and also add it to the database)
  function createNewTag() {
    let updatedExistingTags = [];

    // create tag only if it is not already created.
    if (!existingTags.includes(newTagName)) {
      updatedExistingTags = [...existingTags, newTagName];  
      setExistingTags(updatedExistingTags);
      setNewTagName('');  // resetting the input field value.

      // TODO: store the newly created tag in the database.
    }
    else setNewTagNameValidity(false);  // setting new tag name as invalid.
  }

  // managing new tag input state.
  function updateNewTagInputValue(event) {
    // hiding the error message (if any) while the input is being given.
    if (!isNewTagNameValid) setNewTagNameValidity(true);

    const newTagValue = event.target.value;
    setNewTagName(newTagValue.toLowerCase());
  }

  // grouped all the setters for better accessibility and readability.
  const method = {
    isTagApplied,
    updateAppliedTags,
    createNewTag,
    updateNewTagInputValue,
  };

  // grouped all the values for better accessibility and readability.
  const value = {
    existingTags,
    appliedTags,
    newTagName,
    isNewTagNameValid,
  };

  return [method, value];
}

export default TagInputLogic;