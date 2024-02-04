const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    // res.send("hello world from node")
    res.status(200).json({
        id: 1,
        name: "babare"
    })
})


module.exports = router;