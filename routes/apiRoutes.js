const fs = require("fs")
const noteData = require("../db/db.json");

console.log(noteData);

module.exports = function(app) {
  app.get("/api/notes", (req, res) => {
console.log(noteData);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    })
  })



}