import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { createConnection } from "typeorm";

import router from "./routes";
import dbConfig from "./config/database";

const PORT = process.env.PORT || 4001;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(router);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}/swagger`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });