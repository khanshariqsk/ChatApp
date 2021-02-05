const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const messageController = require("../controllers/messageController");
const auth = require("../middlewares/auth");

// router.post("/login", catchErrors(userController.login));
router.get("/", auth, catchErrors(messageController.getAllMessage));
router.get("/getMessage", auth, catchErrors(messageController.getMessage));
module.exports = router;
