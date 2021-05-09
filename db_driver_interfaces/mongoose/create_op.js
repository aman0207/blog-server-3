import logger from "../../utils/logger";
// 'data' is the object that is to be saved into the collection/table.
// Collection/Table model is not required to be passed explicitly as...
// 'data' would be a replica of some model itself.(Mongoose specific implementation)
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const createNewRecord = async (data) => {
  try {
    const result = await data.save();
    logger.info(
      "[db_driver_interfaces/mongoose/create_op.js, 'createNewRecord()'] Record has been created."
    );
    logger.debug(result);
    return result;
  } catch (error) {
    logger.error(
      "[db_driver_interfaces/mongoose/create_op.js, 'createNewRecord()'] Record creation has failed.\n" +
        error
    );
    logger.debug(error);
    return undefined;
  }
};

export { createNewRecord };
