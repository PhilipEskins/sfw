const express = require("express")
const router = express.Router()

router.get("/", (req, res) => res.json("Page working"))

module.exports = router