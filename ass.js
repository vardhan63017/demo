const express = require("express");
const app = express();
app.use(express.json());
function logger(req, res, next) {
  console.log("request received");
  next();
}
app.use(logger);
function check(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(404).send("token missing");
  }
  if (token.split(" ")[1] == "affordmed123") {
    next();
  }
}
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/dashboard", check, (req, res) => {
  res.send("welcome affordmed");
});
app.get("/profile", check, (req, res) => {
  res.send("welcome affordmed this is your profile");
});
app.listen(3000);
