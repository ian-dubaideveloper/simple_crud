require("dotenv").config();
const port = process.env.PORT;

// const startServer = (app) => {
//   app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
//   });
// };
function startServer(app) {
  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
}
module.exports = startServer;
