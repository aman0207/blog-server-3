import DotENV from "dotenv";
import logger from "../utils/logger";

const getConfigFilePath = () => {
  if (process.env.NODE_ENV === "production") return ".env";
  else return ".env.dev";
};

// configuring the environment variables.
DotENV.config({ path: getConfigFilePath() });
logger.info("Active Environment file: " + getConfigFilePath());

// Globally accessible configurations.
const appConfig = {
  connection: {
    local: process.env.MONGO_URL,
  },
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

export default appConfig;
