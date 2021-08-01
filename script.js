import express  from "express";
const port = 8000;
const app = express()

const users = [
    { id: 1, name: 'Hasmik', age: 17 },
    { id: 2, name: 'Hrach',  age: 20 },
    { id: 3, name: 'Arman',  age: 40},
    { id: 4, name: 'Jack',  age: 14 },
    { id: 5, name: 'Leo',  age: 34 },
    { id: 6, name: 'Sam',  age: 15 }
]

const strToNum = function (req, res, next) {
    req.params.id = +req.params.id
    req.params.age = +req.params.age
    next()
}

app.get("/", (req, res) => {
    res.send(users)
})

app.post('/:id/:name/:age', strToNum, (req, res) => {
    Users.push(req.params)
    res.send(users)
});

app.put('/:id/:name/:age', strToNum, (req, res) => {
    for (const obj of users) {
        if (obj.id == req.params.id) {
            obj.name = req.params.name
            obj.age = req.params.age
        }
    }
    res.send(users)
});

app.delete('/:id', (req, res) => {
    users.splice(req.params.id-1, 1)
    res.send(users)
});

app.listen(port, ()=> console.log(`Server runing on port:${port}`))