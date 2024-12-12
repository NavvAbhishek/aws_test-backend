import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 3001;
import router from "./router.js";

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://abi2000navi:qycTDOIgahoPLSIf@cluster0.rq97mfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connnect to MongoDb...");
  } catch (error) {
    console.log("MongoDB Error ", error);
  }
};

connect();

const server = app.listen(port, () => {
  console.log(`Node server is running in ${port}`);
});

app.use('/api',router )