import { Injectable,Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cep } from './cep.entity';

@Injectable()
export class AppService {
  constructor(
  @InjectRepository(Cep)
  private readonly tab_cep: Repository<Cep>){}

  async lista_cep(): Promise<Cep[]>{
    return await this.tab_cep.query("select * from cep;");
  }

  async getCep(id:number): Promise<Cep> {
    return await this.tab_cep.findOne({id:id});
  }

  async updateCep(cep:Cep){
    this.tab_cep.save(cep);
  }

  async deleteCep(cep:Cep){
    this.tab_cep.delete(cep);
  }

  async create(cep:Cep){
    this.tab_cep.insert(cep);
  }
}


