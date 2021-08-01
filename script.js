import express  from "express";
const port = 8000;
const app = express()

app.use(express.json())

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Server is working!")
})

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.put('/',  (req, res) => {
    res.send("Everything is update");
});

app.delete("/", (req, res) => {
    res.send("Got a delete request")
})

app.listen(port, ()=> console.log("Server started on port "  + port))