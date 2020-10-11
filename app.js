const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // res.sendFile("index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "public", "form.html"));
});
app.get("/dashboard", (req, res) => {
  // res.sendFile("index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});
// app.get("/signin", (req, res) => {
//   // res.sendFile("index.html", { root: __dirname });
//   res.sendFile(path.join(__dirname, "public", "signin.html"));
//   // res.redirect("/");
// });
app.get("/admin", (req, res) => {
  // res.sendFile("index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
