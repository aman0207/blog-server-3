// 'model' is the model of the collection for which READ op is performed.
// 'ID' is unique identifier value via which record is searched.
// 'projection' is (optional) list of the fields of the records that is to be fetched.
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const fetchSingleRecordByID = async (model, ID, projection = "") => {
  try {
    const record = await model.findById(ID, projection);
    console.info(
      "[db_driver_interfaces/mongoose/read_op.js, 'fetchSingleRecordByID()'] Record has been fetched."
    );
    console.debug(record);
    return record;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/read_op.js, 'fetchSingleRecordByID()'] Fetching record has failed.\n" +
        error
    );
    console.debug(error);
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
    console.info(
      "[db_driver_interfaces/mongoose/read_op.js, 'fetchSingleRecord()'] Records have been fetched."
    );
    console.debug(record);
    return record;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/read_op.js, 'fetchSingleRecord()'] Fetching record has failed.\n" +
        error
    );
    console.debug(error);
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
    console.info(
      "[db_driver_interfaces/mongoose/read_op.js, 'fetchMultipleRecordByID()'] All records has been fetched."
    );
    console.debug(records);
    return records;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/read_op.js, 'fetchMultipleRecord()'] Fetching all records have failed.\n" +
        error
    );
    console.debug(error);
    return undefined;
  }
};

export { fetchSingleRecordByID, fetchSingleRecord, fetchMultipleRecords };
