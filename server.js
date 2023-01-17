const dotenv = require("dotenv");
const app = require("./app");

// Environment Variables
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

// Listening
app.listen(PORT, console.log("Waiting for request..."));