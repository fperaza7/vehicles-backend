import VehicleController from "./vehicle.controller";
import * as VehicleRepository from "../repositories/vehicle.repository";

describe("VehicleController", () => {
  describe("index", () => {
    test("should return empty array", async () => {
      const spy = jest
        .spyOn(VehicleRepository, "index")
        .mockResolvedValueOnce([]);
      const controller = new VehicleController();
      const users = await controller.index();
      expect(users).toEqual([]);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });

    test("should return user list", async () => {
      const vehiclesList = [
        {
          "id": 1,
          "brand": "Toyota",
          "model": 2010,
          "color": "Red",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
      ];
      const spy = jest
        .spyOn(VehicleRepository, "index")
        .mockResolvedValueOnce(vehiclesList);
      const controller = new VehicleController();
      const users = await controller.index();
      expect(users).toEqual(vehiclesList);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
  });

  describe("create", () => {
    test("should create vehicle", async () => {
      const payload = {
        "brand": "Mazda",
        "model": 2020,
        "color": "Black",
        "state": true
      };
      const userData = {
        "id": 2,
        "brand": "Mazda",
        "model": 2020,
        "color": "Black",
        "state": true,
        "createdAt": new Date(),
        "updatedAt": new Date()
      };
      const spy = jest
        .spyOn(VehicleRepository, "create")
        .mockResolvedValueOnce(userData);
      const controller = new VehicleController();
      const user = await controller.create(payload);
      expect(user).toMatchObject(payload);
      expect(user).toEqual(userData);
      expect(spy).toHaveBeenCalledWith(payload);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});