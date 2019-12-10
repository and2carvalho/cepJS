import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cep {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:25})
    cep_num: string;

    @Column({length:100})
    cidade_nome: string;
}
