import User from "../models/User.js";

/* ===============================
   ACTIVATE SUBSCRIPTION (FAKE)
================================ */
export const activateSubscription = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

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
};
