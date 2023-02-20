import express from "express";
import router from "./routes/kittens.js";

const app = express();
const port = 8000;
const hostname = "localhost";

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const BASE_URL = `http://${hostname}:${port}`;

app.use(express.static("public"));

//importation des routes
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at ${BASE_URL}`);
});
