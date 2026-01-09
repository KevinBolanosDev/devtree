import { Router } from "express";

const router = Router();

// api
router.get("/", (req, res) => {
  res.send("Hello World");
});
router.get("/nosotros", (req, res) => {
  res.send("Hello Nosotros");
});
router.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

export default router;
