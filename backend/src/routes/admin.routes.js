const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const admin = require("../controllers/admin.controller");

router.get("/users", auth, role("admin"), admin.getAllUsers);
router.patch("/users/:id/activate", auth, role("admin"), admin.activateUser);
router.patch(
    "/users/:id/deactivate",
    auth,
    role("admin"),
    admin.deactivateUser
);

module.exports = router;
