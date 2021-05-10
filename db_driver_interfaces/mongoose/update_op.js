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
    console.info(
      "[db_driver_interfaces/mongoose/update_op.js, updateSingleRecordByID()'] Record has been updated."
    );
    console.debug(updatedRecord);
    return updatedRecord;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/update_op.js, updateSingleRecordByID()'] Record update has failed.\n" +
        error
    );
    console.debug(error);
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
    console.info(
      "[db_driver_interfaces/mongoose/update_op.js, updateSingleRecord()'] Record has been updated."
    );
    console.debug(updatedRecord);
    return updatedRecord;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/update_op.js, updateSingleRecord()'] Record update has failed.\n" +
        error
    );
    console.debug(error);
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
    console.info(
      "[db_driver_interfaces/mongoose/update_op.js, updateMultipleRecord()'] All records have been updated."
    );
    console.debug(updatedRecord);
    return updatedRecord;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/update_op.js, updateMultipleRecord()'] Updating all records failed.\n" +
        error
    );
    console.debug(error);
    return undefined;
  }
};

export { updateSingleRecordByID, updateSingleRecord, updateMultipleRecords };
