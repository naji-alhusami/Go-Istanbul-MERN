import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  console.log("GET Request in Places");
  res.json({ message: "We Start" });
});

export default router;
