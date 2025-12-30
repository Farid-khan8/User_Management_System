const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const user = require("../controllers/user.controller");

router.get("/me", auth, user.me);
router.put("/update", auth, user.updateProfile);
router.put("/password", auth, user.changePassword);

module.exports = router;
