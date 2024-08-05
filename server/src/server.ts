import express from "express";
import { loansRouter } from "./routes/loans/loans-route";

const app = express();


app.use(express.json());

app.use("/loans", loansRouter);

app.listen(3000, () => { 
  console.log("Server running at: http://localhost:3000"); 
})