import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
var tasksList = [];
var dateList = [];
function Occurence(task, date) {
    this.task = task;
    this.date = date;
}
var arrObj = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/tasks", (req, res) => {
    res.render("tasks.ejs");
})

app.post("/tasks", (req, res) => {
    tasksList.push(req.body["task"]);
    dateList.push(req.body["date"]);
    var occ = new Occurence(req.body["task"], req.body["date"]);
    arrObj.push(occ);
    res.render("tasks.ejs", {
        obj : arrObj
    })
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})