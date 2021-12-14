const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
// app.get(path, function(req, res) => {
//     ............
// }, next)


app.use(express.static("public"))
// SETTING UP VIEW ENGINE
app.set("view engine", "ejs")


// app.get('/', (req, res) => {
//     console.log("here I'm boi")
//     // res.send('Hi mg')
//     // res.sendStatus(500)
//     // res.status(500).send('hello boi')
//     // res.status(500).json({ message: "hi kaneki" })
//     // res.json({ message: "hi kaneki" })
//     // res.download("server.js")


//     // you cannt render file without any view engine, its necessary
//     // to setup it first 
//     // first parmeter contain file that need to view and second parameter pass data
//     // from this server to that file which's renders on this route '/'
//     res.render('index', {text: "World"})

// })

const userRouter = require("./routes/users")
// any route inside userRouter will be added next to /users route
app.use('/users', userRouter)

app.listen(3000)