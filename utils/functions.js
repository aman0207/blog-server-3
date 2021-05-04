const getConfigFilePath = () => {
    if (process.env.NODE_ENV === "production") return ".env";
    else return ".env.dev";
  };

// exports.getServerConfigurations = () => {
//     return {
//         port: process.env.port,
//         connectionURL: process.env.connectionURL,
//         databseName: process.env.database,
//         personCollection: process.env.personCollection,
//     };
// }

export { getConfigFilePath };