const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const totalUsers = await User.countDocuments();
    const users = await User.find()
        .skip(skip)
        .limit(limit)
        .select("-password")
        .sort({ createdAt: -1 });

    res.json({
        users,
        totalPages: Math.ceil(totalUsers / limit),
        currentPage: page,
    });
};

exports.activateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { status: "active" });
    res.json({ message: "User activated" });
};

exports.deactivateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { status: "inactive" });
    res.json({ message: "User deactivated" });
};
