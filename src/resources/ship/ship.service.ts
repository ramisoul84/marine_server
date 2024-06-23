import { Injectable } from '@nestjs/common';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ship } from './entities/ship.entity';

@Injectable()
export class ShipService {
  constructor(
    @InjectRepository(Ship)
    private shipRepository: Repository<Ship>,
  ) {}

  create(createShipDto: CreateShipDto) {
    return this.shipRepository.save(createShipDto);
  }

  findAll() {
    return this.shipRepository.find();
  }

  findOne(id: number) {
    return this.shipRepository.findOne({ where: { orderId: id } });
  }

  update(id: number, updateShipDto: UpdateShipDto) {
    return this.shipRepository.update(id, updateShipDto);
  }

  remove(id: number) {
    return this.shipRepository.delete(id);
  }
}
