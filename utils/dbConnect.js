import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
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
