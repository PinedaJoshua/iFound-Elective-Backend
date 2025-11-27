const express = require("express");
const router = express.Router();
const {
  createClaim,
  getClaims,
  updateClaim
} = require("../controllers/claimsController");

router.post("/", createClaim);
router.get("/", getClaims);
router.put("/:id", updateClaim);

module.exports = router;