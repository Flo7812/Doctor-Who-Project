const express = require("express")
const port = 7000 // || process.env.PORT

const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("hello world from node")
    /*res.status(200).json({
        id: 1,
        name: "babare"
    })*/
})

const users = require('./routes/users')
app.use('/users', users)

// const home = require('./scripts/src/app')
// app.use("/home", home)

app.listen(port, () => {
    console.log('server is connect');
})

