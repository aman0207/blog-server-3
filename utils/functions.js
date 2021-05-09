import logger from "./logger";
// import appConfig from "../common/config";

function generateMongoConnectionURL() {
  if (process.env.dev.DB_SERVER === "cloud") {
    const atlas =
      "mongodb+srv://" +
      // appConfig.database.user +
      process.env.dev.DB_USER +
      ":" +
      // appConfig.database.password +
      process.env.dev.DB_PASSWORD +
      "@cluster0.3wtac.mongodb.net/" +
      // appConfig.database.name +
      process.env.dev.DB_NAME +
      "?retryWrites=true&w=majority";

    logger.info(
      "[utils/functions, 'generateMongoConnectionURL()'] URL for cloud database server is generated."
    );
    logger.debug(atlas);

    return atlas;
  } else {
    logger.info(
      "[utils/functions, 'generateMongoConnectionURL()'] URL for local database server is generated."
    );
    logger.debug(process.env.dev.MONGO_URL);

    // returns local connection URL (or use 'default' local URL)
    return process.env.dev.MONGO_URL || "mongodb://localhost:27017/testDB";
  }
}

const removeArrayElement = (array, element) => {
  let newArray = [];

  // populating new array.
  array.forEach((arrayElement) => {
    if (arrayElement !== element) newArray.push(arrayElement);
  });

  return newArray;
};

export { generateMongoConnectionURL, removeArrayElement };
