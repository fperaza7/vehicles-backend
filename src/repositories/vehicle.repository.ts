import { getRepository, UpdateResult } from "typeorm";
import { Vehicle } from "../models";

export interface IVehiclePayload {
  brand: string;
  model: number;
  color: string;
  state: boolean;
}

export const index = async (): Promise<Array<Vehicle>> => {
  const vehicleRepository = getRepository(Vehicle);
  return vehicleRepository.find();
};

export const create = async (payload: IVehiclePayload): Promise<Vehicle> => {
  const vehicleRepository = getRepository(Vehicle);
  const vehicle = new Vehicle();
  return vehicleRepository.save({
    ...vehicle,
    ...payload,
  });
};

export const update = async (id: number, payload: IVehiclePayload): Promise<Vehicle | null> => {
  const vehicleRepository = getRepository(Vehicle);
  const vehicle = await vehicleRepository.findOne({ id });
  if (!vehicle) return null;
  return vehicleRepository.save({
    id,
    ...payload,
  });
};

export const show = async (id: number): Promise<Vehicle | null> => {
  const vehicleRepository = getRepository(Vehicle);
  const vehicle = await vehicleRepository.findOne({ id: id });
  if (!vehicle) return null;
  return vehicle;
};

export const destroy = async (id: number): Promise<void> => {
  const vehicleRepository = getRepository(Vehicle);
  await vehicleRepository.delete(id);
  return;
};