const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql");
const jwt = require("jsonwebtoken");
const { secretKey } = require("./graphql/config");

const app = express();
app.use(express.json());

const checkAuthorization = async (req, res, next) => {
  const token = req.headers.authorization;

  const { operationName } = req.body;
  console.log(req.body);
  console.log(operationName);

  // if (operationName === "Login") {
  return next();
  // }

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Missing token" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    req.auth = {
      user: decoded,
    };

    next();
  });
};

app.all("/graphql", createHandler({ schema }));

async function start(port) {
  return new Promise((resolve) => app.listen({ port }, resolve));
}

module.exports = {
  start,
};
