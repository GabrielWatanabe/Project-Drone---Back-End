import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Drone from './db/models/drone.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(Drone) public readonly droneRepo: Repository<Drone>,
  ) {}
}

export default RepoService;