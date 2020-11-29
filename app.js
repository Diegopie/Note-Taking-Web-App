const express = require("express");
const fs = require("fs");


// Set server
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static(__dirname + '/public' ) );

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));

// Routes ????????????????????????????????
    // GET   /notes   return note.html
    // GET *    return index.html


// fs

// API Routes
    // GET /api/notes    read db.json
    // POST  /api/notes     fs.read file, turn it into an array, append to that array, .then write file

// Delete ????????????????????????????