import express from "express";
import VehicleController from "../controllers/vehicle.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new VehicleController();
  const response = await controller.index();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new VehicleController();
  const response = await controller.create(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new VehicleController();
  const response = await controller.show(req.params.id);
  if (!response) res.status(404).send({ message: "No vehicle found" });
  return res.send(response);
});

router.put("/:id", async (req, res) => {
  const controller = new VehicleController();
  const response = await controller.update(req.params.id, req.body);
  if (!response) res.status(404).send({ message: "No vehicle found" });
  return res.send(response);
});

router.delete("/:id", async (req, res) => {
  const controller = new VehicleController();
  const response = await controller.delete(req.params.id);
  return res.send(response);
});

export default router;