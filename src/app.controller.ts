import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Cep } from './cep.entity';

@Controller()
export class AppController {
  constructor(private service: AppService) {}

   @Get()
  lista_cep(){
    return this.service.lista_cep();
  }

  @Get(':id')
  get(@Param() params){
    return this.service.getCep(params.id);
  }

  @Post()
  create(@Body() cep:Cep) {
    this.service.create(cep);
  }

  @Put()
  update(@Body() cep:Cep){
    return this.service.updateCep(cep);
  }

  @Delete(':id')
  delteCep(@Param() params){
    return this.service.deleteCep(params.id);
  }
}
