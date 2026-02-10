import express from "express";
import { verifyJwt } from "../middleware/verifyJwt";

const router = express.Router();

router.get("/data", verifyJwt, (req, res) => {
  res.json({ message: "Secure data", user: req.user });
});

export default router;
