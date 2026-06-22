const express = require("express");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.get("/", (req, res) => {
  res.send("public route");
});
function check(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("token is missing");
  }
  if (token.split(" ")[1] === "affordmed123") {
    next();
  } else {
    res.status(401).send("unauthorized access");
  }
}
function verify(req, res, next) {
  const data = req.body;
  if (data.email == "vardhan@gmail.com" && data.password == "123") {
    next();
  } else {
    res.json({
      message: "Invalid Credentials",
    });
  }
}
app.post("/login", verify, (req, res) => {
  res.json({
    token: "affordmed123",
  });
});
app.get("/dashboard", check, (req, res) => {
  res.send("welcome vardhan");
});
app.listen(3000);
