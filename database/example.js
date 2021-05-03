// THIS FILE SERVERS AS AN EXAMPLE AND MUST BE REMOVED FROM THE PROJECT.

// const Person = require("../../models/person");
// const { fetchSingleRecordByID, fetchMultipleRecords } = require("./read_op");

// -------- CONTROLLER ---------
// exports.getPersonDetails = async (request, response) => {
//   const id = request.body.id;
//   const projectionFields = request.body.projectionFields;

//   if (projectionFields && projectionFields.length > 0)
//     projectionFields = projectionFields.join(' ');
//   else
//     projectionFields = [];

//  ====== ACTUAL APPLICATION =======
//   const recordFetched = await fetchSingleRecordByID(Person, id, projectionFields);
//   if (recordFetched)
//     response.status(200).json({
//       message: "Person data fetched",
//       recordFetched: recordFetched,
//     });
//   else
//     response.status(503).json({
//       message: "Person data fetcheing failed",
//     });
// ===================================
// -----------------------------------
// };

