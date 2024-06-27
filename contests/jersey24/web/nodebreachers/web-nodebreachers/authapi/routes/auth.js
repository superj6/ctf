const express = require("express")
const router = express.Router()
const auth = require("../controllers/auth")

router.get("/test", auth.test )
router.post("/register", auth.register )
router.post("/login", auth.login)
router.post("/logout", auth.login)



module.exports = router


