import { Get, Route, Post, Body, Path, Put, Delete } from "tsoa";
import { Vehicle } from "../models";
import {
  create,
  index,
  IVehiclePayload,
  show,
  update,
  destroy
} from "../repositories/vehicle.repository";

@Route("vehicles")
export default class VehicleController {
  @Get("/")
  public async index(): Promise<Array<Vehicle>> {
    return index();
  }

  @Post("/")
  public async create(@Body() body: IVehiclePayload): Promise<Vehicle> {
    return create(body);
  }

  @Get("/:id")
  public async show(@Path() id: string): Promise<Vehicle | null> {
    return show(Number(id));
  }

  @Put("/:id")
  public async update(@Path() id: string, @Body() body: IVehiclePayload): Promise<Vehicle | null> {
    return update(Number(id), body);
  }

  @Delete("/:id")
  public async delete(@Path() id: string): Promise<void> {
    return destroy(Number(id));
  }
}