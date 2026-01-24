import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true, // 🔥 performance + safety
    },

    city: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "photographer", "admin"], // 🔥 strict roles
      default: "photographer",
    },

    isApproved: {
      type: Boolean,
      default: false, // photographer approval by admin
    },

    subscriptionActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
