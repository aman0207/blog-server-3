import logger from "../../utils/logger";

// 'model' is a MONGOOSE model of the collection on which DELETE op is performed.
// 'ID' is unique identifier value via which record is searched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const deleteSingleRecordByID = async (model, ID) => {
  try {
    const result = await model.findByIdAndDelete(ID);
    logger.info("Record has been deleted.");
    return result;
  } catch (error) {
    logger.error("Record deletion has failed.\n" + error);
    return undefined;
  }
};

// 'model' is a MONGOOSE model of the collection on which DELETE op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const deleteSingleRecord = async (model, searchFilter) => {
  try {
    const result = await model.deleteOne(searchFilter);
    logger.info("Record has been deleted.");
    return result;
  } catch (error) {
    logger.error("Record deletion has failed.\n" + error);
    return undefined;
  }
};

// 'model' is a MONGOOSE model of the collection on which DELETE op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const deleteMultipleRecords = async (model, searchFilter) => {
  try {
    const results = await model.deleteMany(searchFilter);
    logger.info("All results has been deleted.");
    return results;
  } catch (error) {
    logger.error("All results deletion failed.\n" + error);
    return undefined;
  }
};

export { deleteSingleRecordByID, deleteSingleRecord, deleteMultipleRecords };