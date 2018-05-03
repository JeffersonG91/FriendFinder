// initiating express
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// const path = require

// port
var PORT = process.env.PORT || 3233;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("app/public"));

// iniating routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listen on port
app.listen(PORT, function() {
	console.log("App now listening at localhost:" + PORT)
})

