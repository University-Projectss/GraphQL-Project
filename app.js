const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql");
const jwt = require("jsonwebtoken");
const { secretKey } = require("./graphql/config");

const app = express();
app.use(express.json());

const checkAuthorization = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    req.user = null;
    return next();
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      req.user = null;
      return next();
    }

    req.user = decoded;
    next();
  });
};

app.all(
  "/graphql",
  checkAuthorization,
  createHandler({
    schema,
    context: (req) => ({
      req,
    }),
  })
);

// // Define the error handling middleware
// app.use((err, req, res, next) => {
//   if (err.message === "Unauthorized") {
//     res.status(401).send("Unauthorized");
//   } else {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

async function start(port) {
  return new Promise((resolve) => app.listen({ port }, resolve));
}

module.exports = {
  start,
};
