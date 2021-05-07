import logger from "../../utils/logger";
// 'data' is the object that is to be saved into the collection/table.
// Collection/Table model is not required to be passed explicitly as...
// 'data' would be a replica of some model itself.(Mongoose specific implementation)
// returns 'undefined' on failure so that it can be gracefully handled by frontend.
const createNewRecord = async (data) => {
  try {
    const result = await data.save();
    logger.info("Record has been created.");
    return result;
  } catch (error) {
    logger.error("Record creation has failed.\n" + error);
    return undefined;
  }
};

export { createNewRecord };