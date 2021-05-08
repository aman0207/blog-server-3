const logger = require("../../utils/logger");

// 'model' is a MONGOOSE model of the collection on which UPDATE op is performed.
// 'ID' is unique identifier value via which record is searched.
// 'newData' are the properties (key-value maps) which would be updated in the record.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const updateSingleRecordByID = async (model, ID, newData) => {
  try {
    // option { new: true } returns the updatedRecord values rather that old record values.
    const updatedRecord = await model.findByIdAndUpdate(ID, newData, {
      new: true,
    });
    logger.info("Record has been updated.");
    return updatedRecord;
  } catch (error) {
    logger.error("Record update has failed.\n" + error);
    return undefined;
  }
};

// 'model' is a MONGOOSE model of the collection on which UPDATE op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// 'newData' are the properties (key-value maps) which would be updated in the record.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const updateSingleRecord = async (model, searchFilter, newData) => {
  try {
    // option { new: true } returns the updatedRecord values rather that old record values.
    const updatedRecord = await model.findOneAndUpdate(searchFilter, newData, {
      new: true,
    });
    logger.info("Record has been updated.");
    return updatedRecord;
  } catch (error) {
    logger.error("Record update has failed.\n" + error);
    return undefined;
  }
};

// 'model' is a MONGOOSE model of the collection on which UPDATE op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// 'newData' are the properties (key-value maps) which would be updated in the record.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const updateMultipleRecords = async (model, searchFilter, newData) => {
  try {
    // option { new: true } returns the updatedRecord values rather that old record values.
    const updatedRecord = await model.updateMany(searchFilter, newData, {
      new: true,
    });
    logger.info("All records have been updated.");
    return updatedRecord;
  } catch (error) {
    logger.error("Updating all records failed.\n" + error);
    return undefined;
  }
};

export { updateSingleRecordByID, updateSingleRecord, updateMultipleRecords };
