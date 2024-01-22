import connectToMongo from "./database/db.js";
import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import cors from "cors";

connectToMongo();
const app = express();
const port = 4000;

// middle ware
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: [
//       "https://vercel.com/rakesh-kumar-guptas-projects/notebook-backend",
//     ],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

// Available routes
app.get("/", (req, res) => {
  res.json("eNotebook Backend API");
});
app.use("/api/auth", auth);
app.use("/api/notes", notes);

app.listen(port, () => {
  console.log(`App listening at port http://localhost:${port}`);
});
