const jwt = require("jsonwebtoken");

exports.generateToken = (user) =>
    jwt.sign(
        { id: user._id, role: user.role, name: user.fullName },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
