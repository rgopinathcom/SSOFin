import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import apiRoutes from "./routes/api";

const app = express();

app.use(cors());
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.listen(process.env.PORT || 5000);
