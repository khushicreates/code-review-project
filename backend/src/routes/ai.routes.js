
const express = require ('express');

const aiController = require("../controllers/ai.controller")

console.log("aiController:", aiController);
console.log("getReview:", aiController.getReview);
console.log("typeof:", typeof aiController.getReview);

const router = express.Router();



router.post("/get-review",aiController.getReview) 




module.exports = router;