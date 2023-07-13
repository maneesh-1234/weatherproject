const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, "../public");
const templetePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templetePath);
hbs.registerPartials(partialsPath);

app.use(express.static(static_path));

//routing
app.get("", (req,res) => {
    res.render("index");
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/weather", (req,res) => {
    res.render("weather");
});

app.get("*", (req,res) => {
    res.render("404error", {
        errorMsg: 'Opps! Page Not Found',
    });
});


app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});


//  "start" : "node src/app.js"