const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");

const schema = require("./graphql");
const db = require("./models");

const app = express();
app.use(express.json());

const checkAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;

  const userId = authorization.split(":")[1];

  const user = await db.User.findOne({ where: { id: userId } });

  req.auth = {
    user,
  };

  next();
};

app.all("/graphql", checkAuthorization, createHandler({ schema }));

async function start(port) {
  return new Promise((resolve) => app.listen({ port }, resolve));
}

module.exports = {
  start,
};
