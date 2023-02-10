// const express = require("express");
// const app = express();
// const tasks = require("./routes/tasks");
// const connectDB = require("./db/connect");
// require("dotenv").config();

// app.use(express.static("./public"));
// app.use(express.json());
// app.use("/api/v1/tasks", tasks);

// const port = 3000;
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, () => console.log(`App is runing on port ${port} ...`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("Home page for http://localhost");
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else {
    res.end(`
    THis page is not found please go back in home page
    <a type="button" href="/" >Back Home</a>
    `);
  }
});

server.listen(5000);
