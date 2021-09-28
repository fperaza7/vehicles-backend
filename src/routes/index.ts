import express from "express";
import VehicleRouter from "./vehicle.router";

const router = express.Router();

router.use("/vehicles", VehicleRouter);

export default router;