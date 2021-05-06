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

const removeArrayElement = (array, element) => {
  let newArray = [];

  // populating new array.
  array.forEach((arrayElement) => {
    if (arrayElement !== element) newArray.push(arrayElement);
  });

  return newArray;
};

export { getConfigFilePath, removeArrayElement };
