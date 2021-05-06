import { useState } from "react";

import { TAG_ACTION } from "./TagInputView";
import { removeArrayElement } from "../../utils/functions";

const TagInputLogic = () => {
  const [tagsApplied, setTags] = useState([]);

  function isTagApplied(tagName) {
    return (tagsApplied.includes(tagName))? true : false;
  }

  function updateTags(action, tag, formSyncFunc) {
    console.debug("updateTag function called");
    let updatedTags = [];  // list of tags after performing the action.

    switch(action) {
      case TAG_ACTION.ADD:
        // add tag only if it is not already included.
        if (!tagsApplied.includes(tag)) updatedTags = [...tagsApplied, tag];  
        else updatedTags = tagsApplied;

        console.debug("After inclusion: " + updatedTags);
      break;

      case TAG_ACTION.REMOVE:
        // removes tag only if it is already included.
        if (tagsApplied.includes(tag)) updatedTags = removeArrayElement(tagsApplied, tag);
        else updatedTags = tagsApplied;

        console.debug("After removal: " + updatedTags);
      break;
    }

    // UPDATING THE STATES AT DIFFERENT PLACES.
    if (formSyncFunc) formSyncFunc(updatedTags); // inside (parent) form, if exists.
    setTags(updatedTags); // inside the component.
  }

  return [ isTagApplied, updateTags ];
}

export default TagInputLogic;