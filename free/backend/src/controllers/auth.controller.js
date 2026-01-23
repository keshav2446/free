import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* ===============================
   REGISTER PHOTOGRAPHER
================================ */
export const register = async (req, res) => {
  try {
    const { name, email, city, password } = req.body;

    // 1️⃣ Basic validation
    if (!name || !email || !city || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 2️⃣ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const user = await User.create({
      name,
      email,
      city,
      password: hashedPassword,
    });

    // 5️⃣ Response
    res.status(201).json({
      message: "Registered successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({
      message: "Server error",
    });
  }
};

/* ===============================
   LOGIN PHOTOGRAPHER
================================ */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2️⃣ Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // 4️⃣ Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5️⃣ Response
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        city: user.city,
      },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({
      message: "Server error",
    });
  }
};
