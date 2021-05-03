import mongoose from "mongoose";
import DotENV from "dotenv";

import { getConfigFilePath } from "../utils/functions";

// configuring the environment variables.
DotENV.config({ path: getConfigFilePath() });
const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;
  console.log("DB connection URL : " + process.env.MONGO_URL);

  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  connection.isConnected = db.connections[0].readyState;
  console.log("DB isConnected : " + connection.isConnected);
}

export default dbConnect;
