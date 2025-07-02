const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    console.log("New");
    res.render("new");
});

module.exports = router;