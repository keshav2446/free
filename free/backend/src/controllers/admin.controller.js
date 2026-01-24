import User from "../models/User.js";

/* ===============================
   ADMIN DASHBOARD STATS
================================ */
export const getAdminStats = async (req, res) => {
  try {
    const [
      totalUsers,
      photographers,
      pendingPhotographers,
      activeSubscriptions,
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: "photographer" }),
      User.countDocuments({ role: "photographer", isApproved: false }),
      User.countDocuments({ subscriptionActive: true }),
    ]);

    res.status(200).json({
      totalUsers,
      photographers,
      pendingPhotographers,
      activeSubscriptions,
    });
  } catch (error) {
    console.error("Admin Stats Error:", error.message);
    res.status(500).json({
      message: "Failed to fetch admin stats",
    });
  }
};

/* ===============================
   GET PENDING PHOTOGRAPHERS
================================ */
export const getPendingPhotographers = async (req, res) => {
  try {
    const pendingPhotographers = await User.find({
      role: "photographer",
      isApproved: false,
    })
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json(pendingPhotographers);
  } catch (error) {
    console.error("Pending Photographers Error:", error.message);
    res.status(500).json({
      message: "Failed to fetch pending photographers",
    });
  }
};

/* ===============================
   APPROVE PHOTOGRAPHER
================================ */
export const approvePhotographer = async (req, res) => {
  try {
    const { id } = req.params;

    const photographer = await User.findById(id);

    if (!photographer) {
      return res.status(404).json({
        message: "Photographer not found",
      });
    }

    if (photographer.isApproved) {
      return res.status(400).json({
        message: "Photographer already approved",
      });
    }

    photographer.isApproved = true;
    await photographer.save();

    res.status(200).json({
      message: "Photographer approved successfully",
      photographerId: photographer._id,
    });
  } catch (error) {
    console.error("Approve Photographer Error:", error.message);
    res.status(500).json({
      message: "Failed to approve photographer",
    });
  }
};
