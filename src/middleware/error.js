const { AssertionError } = require('assert');
const { MongoError } = require('mongodb');

module.exports.generalError = (error, req, res, next) => {
  console.log(error);
  res.json({ message: error.message });
}

// module.exports.handleAssertionError = (error, req, res, next) => {
//   console.log(error);
//     if (error instanceof AssertionError) {
//         return res.status(400).json({
//           type: 'AssertionError',
//           message: error.message
//         });
//     }
//     next(error);
// };

// module.exports.handleDatabaseError = (error, req, res, next) => {
//   console.log(error);
//     if (error instanceof MongoError) {
//         return res.status(503).json({
//           type: 'MongoError',
//           message: error.message
//         });
//       }
//       next(error);
// };