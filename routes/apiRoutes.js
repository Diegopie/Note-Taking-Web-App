const fs = require("fs")
const noteData = require("../db/db.json");

let newID = noteData.length
// console.log(newID);

// console.log(noteData.length);

module.exports = function(app) {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // console.log(data);
      res.send(JSON.parse(data));
    });
  });

  // Route for Saving Notes
  app.post("/api/notes", (req, res) => {
        // console.log("Post");
        // console.log(req.body);
    // Create New Keu ID
    const { id } = req.body
    // Maybe add an ID based on noteData.length, then in app.delete, do another for in that updates all the ids

    // Set ID value a unique ID
    req.body.id = newID
        // console.log(req.body);
    // Push New Note to notaData array
    noteData.push(req.body)
        // console.log(noteData);
    // Overwrite Old db File with New noteData Array
    fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) => {
      if (err) throw err;
      console.log("Done it");
    });
    res.send();
  })

  app.delete("/api/notes/:id", (req, res) => {
    // Get ID to Be Deleted
    const toDelete = req.params.id;
        // console.log("To Delete: ", toDelete);
    // Loop Through noteData to Find the Selected ID
    noteData.forEach(del => {
      if (del.id == toDelete) {
            // console.log("Done it: ", del);
        // Find the Index Value of the Match
        const index = noteData.indexOf(del);
            // console.log("Index of array: ", index);
        // Remove it From Array
        noteData.splice(index, 1);
            // console.log("New note data: ", noteData);
      }
    });
    // Update the IDs of All the Notes
    let i = 0;
    noteData.forEach(ind => {
      ind.id = i;
      i++;
    })
    // console.log("update ids: ", noteData);
    // Update DB with New Array
    fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) => {
      if (err) throw err;
      console.log("Done it");
    });
    res.send();
  })
}

// Back uo and work on post then delete