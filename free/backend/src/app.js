import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
// import subscriptionRoutes from "./routes/subscription.routes.js";
import publicRoutes from "./routes/public.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

// app.use("/api/subscription", subscriptionRoutes);

app.use("/api/public", publicRoutes);

app.get("/", (req, res) => {
  res.send("LensConnect API running 🚀");
});

export default app;
