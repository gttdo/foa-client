var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/assets"));

app.get("/", function(req, res){
        res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/bw", (req, res) =>{
  res.render("about_bw");
});

app.get("/ah", (req, res) =>{
  res.render("about_ah");
});

app.get("/tb", (req, res) =>{
  res.render("about_tb");
});

app.get("/services", (req, res) =>{
  res.render("services");
});

app.get("/blog", (req, res) =>{
  res.render("blog");
});

app.get("/contact", (req, res) =>{
  res.render("contact");
});

app.listen(3000, function(){
  console.log("Server has started!");
});
