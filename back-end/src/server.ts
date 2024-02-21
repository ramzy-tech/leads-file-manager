import express from "express";
import { excuteQuery } from "./setup/dbConnection";
import cors from "cors";

import userRouter from "./routes/users";
import filesRouter from "./routes/files";

const app = express();
app.use(cors());
// Middleware to parse JSON in the request body
app.use(express.json({ limit: "100mb" }));

app.use("/users", userRouter);
app.use("/files", filesRouter);

app.listen(8080, () => {
  console.log("Server Is Running On Port 8080...");
});
