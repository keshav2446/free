import express from "express";
import {
  getAdminStats,
  getPendingPhotographers,
  approvePhotographer,
} from "../controllers/admin.controller.js";
import adminMiddleware from "../middleware/admin.middleware.js";

const router = express.Router();

router.get("/stats", adminMiddleware, getAdminStats);
router.get(
  "/photographers/pending",
  adminMiddleware,
  getPendingPhotographers
);
router.put(
  "/photographers/:id/approve",
  adminMiddleware,
  approvePhotographer
);

export default router;
