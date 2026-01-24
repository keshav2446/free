import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* ===============================
   REGISTER PHOTOGRAPHER
================================ */
export const register = async (req, res) => {
  try {
    const { name, email, city, password } = req.body;

    if (!name || !email || !city || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      city,
      password: hashedPassword,
      role: "photographer",
      isApproved: false,          // admin decides
      subscriptionActive: false,  // user decides later
    });

    res.status(201).json({
      message: "Registered successfully. Await admin approval.",
      userId: user._id,
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/* ===============================
   LOGIN USER (FINAL & CORRECT)
================================ */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ PASSWORD CHECK
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ ADMIN APPROVAL CHECK (ONLY BLOCKER)
    // if (user.role === "photographer" && !user.isApproved) {
    //   return res.status(403).json({
    //     message: "Your account is pending admin approval",
    //   });
    // }

    // ✅ TOKEN
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        city: user.city,
        role: user.role,
        isApproved: user.isApproved,
        subscriptionActive: user.subscriptionActive,
      },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
