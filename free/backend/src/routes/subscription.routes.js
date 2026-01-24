import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/activate", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.subscriptionActive = true;
    await user.save();

    res.json({
      message: "Subscription activated successfully",
    });
  } catch (error) {
    console.error("Subscription Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
