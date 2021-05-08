//const logger = require("../utils/logger");
import logger from "../../utils/logger";

// 'model' is the model of the collection for which READ op is performed.
// 'ID' is unique identifier value via which record is searched.
// 'projection' is (optional) list of the fields of the records that is to be fetched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const fetchSingleRecordByID = async (model, ID, projection = "") => {
  try {
    const record = await model.findById(ID, projection);
    logger.info("Record has been fetched.");
    return record;
  } catch (error) {
    logger.error("Fetching record has failed.\n" + error);
    return undefined;
  }
};

// 'model' is the model of the collection for which READ op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// 'projection' is (optional) list of the fields of the records that is to be fetched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const fetchSingleRecord = async (model, searchFilter, projection = "") => {
  try {
    const record = await model.findOne(searchFilter, projection);
    logger.info("Records have been fetched.");
    return record;
  } catch (error) {
    logger.error("Fetching record has failed.\n" + error);
    return undefined;
  }
};

// 'model' is the model of the collection for which READ op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// 'projection' is (optional) list of the fields of the records that is to be fetched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const fetchMultipleRecords = async (model, searchFilter, projection = "") => {
  try {
    const records = await model.find(searchFilter, projection);
    logger.info("All records has been fetched.");
    return records;
  } catch (error) {
    logger.error("Fetching all records have failed.\n" + error);
    return undefined;
  }
};

export { fetchSingleRecordByID, fetchSingleRecord, fetchMultipleRecords };
