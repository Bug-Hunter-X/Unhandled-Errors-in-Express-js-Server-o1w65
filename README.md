# Unhandled Errors in Express.js Server
This repository demonstrates a common error in Express.js applications: lack of proper error handling.  The `bug.js` file shows a basic Express server without error handling. When an error occurs (e.g., database connection failure), the server crashes without providing any useful information.

The `bugSolution.js` file provides a solution by implementing a middleware function to catch and handle errors gracefully. This allows the server to continue running and provides more informative error messages.