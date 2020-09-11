import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import Drone from '../db/models/drone.entity';
import DroneInput, { DeleteDroneInput } from './input/drone.input';

@Resolver(() => Drone)
export default class DroneResolver {
   constructor(private readonly repoService: RepoService) {}

  @Query(() => [Drone])
  public async getDrones(): Promise<Drone[]> {
    return this.repoService.droneRepo.find();
  }

  @Query(() => Drone, {nullable: true})
  public async getDrone(@Args('id') id: number): Promise<Drone> {
    return  this.repoService.droneRepo.findOne(id);
  }

  @Mutation(() => Drone)
  public async createDrone(@Args('data') input: DroneInput): 
    Promise<Drone> {
      const drone = this.repoService.droneRepo.create({
        image: input.image,
        name: input.name,
        address: input.address,
        battery: input.battery,
        maxSpeed: input.maxSpeed,
        averageSpeed: input.averageSpeed,
        status: input.status,
        fly: input.fly,
    });
      return  this.repoService.droneRepo.save(drone);
  }

  // @Mutation(() => Drone, { nullable: true})
  // public async deleteDrone(@Args('data') input: DeleteDroneInput): 
  //   Promise<Drone> {
  //     const drone = await this.repoService.droneRepo.findOne(input.id);

  //     if(!drone) {
  //       return null;
  //     }

  //     return this.repoService.droneRepo.remove(drone)
  // }
}