const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.me = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
};

// Update profile controller
exports.updateProfile = async (req, res) => {
    const { fullName, email } = req.body;
    const user = await User.findByIdAndUpdate(
        req.user.id,
        { fullName, email },
        { new: true }
    );
    res.json(user);
};

// Change password controller
exports.changePassword = async (req, res) => {
    const { password } = req.body;

    //  Backend validation
    if (!password || password.trim().length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters",
        });
    }

    const hashed = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate(req.user.id, {
        password: hashed,
    });

    res.json({ message: "Password updated successfully" });
};
