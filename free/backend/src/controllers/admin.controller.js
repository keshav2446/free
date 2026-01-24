import User from "../models/User.js";

export const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const photographers = await User.countDocuments({
      role: "photographer",
    });
    const pendingApprovals = await User.countDocuments({
      role: "photographer",
      isApproved: false,
    });
    const activeSubscriptions = await User.countDocuments({
      subscriptionActive: true,
    });

    res.json({
      totalUsers,
      photographers,
      pendingApprovals,
      activeSubscriptions,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPendingPhotographers = async (req, res) => {
  try {
    const users = await User.find({
      role: "photographer",
      isApproved: false,
    }).select("-password");

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const approvePhotographer = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      isApproved: true,
    });

    res.json({ message: "Photographer approved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
