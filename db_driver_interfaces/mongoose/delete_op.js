// 'model' is a MONGOOSE model of the collection on which DELETE op is performed.
// 'ID' is unique identifier value via which record is searched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const deleteSingleRecordByID = async (model, ID) => {
  try {
    const result = await model.findByIdAndDelete(ID);
    console.info(
      "[db_driver_interfaces/mongoose/delete_op.js, 'deleteSingleRecordByID()'] Record has been deleted."
    );
    console.debug(results);
    return result;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/delete_op.js, 'deleteSingleRecordByID()'] Record deletion has failed.\n" +
        error
    );
    console.debug(error);
    return undefined;
  }
};

// 'model' is a MONGOOSE model of the collection on which DELETE op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const deleteSingleRecord = async (model, searchFilter) => {
  try {
    const result = await model.deleteOne(searchFilter);
    console.info(
      "[db_driver_interfaces/mongoose/delete_op.js, 'deleteSingleRecord()'] Record has been deleted."
    );
    console.debug(results);
    return result;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/delete_op.js, 'deleteSingleRecord()'] Record deletion has failed.\n" +
        error
    );
    console.debug(error);
    return undefined;
  }
};

// 'model' is a MONGOOSE model of the collection on which DELETE op is performed.
// 'searchFilter' is key-value mapping based on which records are to be searched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const deleteMultipleRecords = async (model, searchFilter) => {
  try {
    const results = await model.deleteMany(searchFilter);
    console.info(
      "[db_driver_interfaces/mongoose/delete_op.js, 'deleteMany()'] All results has been deleted."
    );
    console.debug(results);
    return results;
  } catch (error) {
    console.error(
      "[delete_op.js, 'deleteMany()'] All results deletion failed.\n" + error
    );
    console.debug(error);
    return undefined;
  }
};

export { deleteSingleRecordByID, deleteSingleRecord, deleteMultipleRecords };
