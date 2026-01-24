import express from "express";
import User from "../models/User.js";

const router = express.Router();

/**
 * PUBLIC PHOTOGRAPHER PROFILE
 * Only visible if approved + subscribed
 */
router.get("/photographers/:id", async (req, res) => {
  try {
    const photographer = await User.findOne({
      _id: req.params.id,
      role: "photographer",
      isApproved: true,
      subscriptionActive: true,
    }).select("-password");

    if (!photographer) {
      return res.status(404).json({
        message: "Photographer not available",
      });
    }

    res.json(photographer);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
