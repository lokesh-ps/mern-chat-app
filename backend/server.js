const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errormiddleware");
const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data
app.get("/", (req, res) => {
  res.send("API running successfully");
});
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((item) => item._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server is up and running at port ${PORT}`.yellow.bold)
);
