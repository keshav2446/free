import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../src/models/User.js";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash("adminpassword", 10);

  const admin = await User.findOneAndUpdate(
    { email: "admin@example.com" },
    {
      password: hashedPassword,
      role: "admin",
      isApproved: true,
      subscriptionActive: true,
    },
    { new: true }
  );

  if (!admin) {
    console.log("❌ Admin user not found");
  } else {
    console.log("✅ Admin password fixed & secured");
  }

  process.exit();
};

run();
