import mongoose from "mongoose";
import DotENV from "dotenv";

import { getConfigFilePath } from "../utils/functions";
import logger from "../utils/logger";

// configuring the environment variables.
DotENV.config({ path: getConfigFilePath() });
const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;
  logger.info("DB connection URL : " + process.env.MONGO_URL);

  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  connection.isConnected = db.connections[0].readyState;
  logger.info("DB isConnected : " + connection.isConnected);
}

export default dbConnect;
