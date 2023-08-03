import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/dataBaseConfig";
import cors from "cors";
import morgan from "morgan";
import "./config/mongooseExecute";

// mongoose

import userRoutes from "./api/v1/routes/users.routes";
import categoriesRoutes from "./api/v1/routes/categories.routes";
import carsRoutes from "./api/v1/routes/cars.routes";

import http from "http";

let argPort: string;
let convertedPort: number;
let PORT: any;

try {
  argPort = process.argv[process.argv.length - 1]
    ? process.argv[process.argv.length - 1]
    : "NO PORT GIVEN IN ARGUMENT";
  convertedPort = parseInt(argPort);
  PORT = convertedPort ? convertedPort : process.env.PORT || 5000;
} catch (err) {
  PORT = process.env.PORT || 5000;
}

dotenv.config();

const uri =
  typeof process.env.URI === "string" ? process.env.URI : "NO URI Found";

connect(uri);

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose routes

app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/cars", carsRoutes);

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
// httpsServer.listen(5001, () => {
//   console.log(`Listening on port : ${5001}`);
// });
