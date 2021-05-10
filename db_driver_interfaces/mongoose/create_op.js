// 'data' is the object that is to be saved into the collection/table.
// Collection/Table model is not required to be passed explicitly as...
// 'data' would be a replica of some model itself.(Mongoose specific implementation)
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const createNewRecord = async (data) => {
  try {
    const result = await data.save();
    console.info(
      "[db_driver_interfaces/mongoose/create_op.js, 'createNewRecord()'] Record has been created."
    );
    console.debug(result);
    return result;
  } catch (error) {
    console.error(
      "[db_driver_interfaces/mongoose/create_op.js, 'createNewRecord()'] Record creation has failed.\n" +
        error
    );
    console.debug(error);
    return undefined;
  }
};

export { createNewRecord };
