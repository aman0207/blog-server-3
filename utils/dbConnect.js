import mongoose from "mongoose";
import { generateMongoConnectionURL } from "../utils/functions";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  const URL = generateMongoConnectionURL();
  const db = await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  connection.isConnected = db.connections[0].readyState;
  console.info(
    "[utils/dbConnect.js, 'dbConnect()'] DB isConnected: " +
      connection.isConnected
      ? "true"
      : "false"
  );
}

export default dbConnect;
