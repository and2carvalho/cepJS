import { Module } from '@nestjs/common';
import { CepModule } from './cep.module'
import { TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Cep } from './cep.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'db4free.net',
            port: 3306,
            username: 'rocknguns',
            password: 'masterkey',
            database: 'so1teste',
            entities: [Cep],
            synchronize: true,
        }),
    CepModule
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
