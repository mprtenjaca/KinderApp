const router = require('express').Router()
const auth = require("../middleware/auth.js")
const userController = require("../controllers/userController.js")


router.get('/search', auth, userController.searchUser)

router.get('/user/:id', auth, userController.getUser)

router.patch('/user', auth, userController.updateUser)

router.get('/suggestionsUser', auth, userController.suggestionsUser)



module.exports = router