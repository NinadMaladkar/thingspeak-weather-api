import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column('float', { nullable: true })
  temperature: number;

  @Column('float', { nullable: true })
  humidity: number;

  @Column('float', { nullable: true })
  pressure: number;

  @Column('float', { nullable: true })
  powerLevel: number;

  @Column('float', { nullable: true })
  windSpeed: number;

  @Column('float', { nullable: true })
  precipitation: number;

  @Column('float', { nullable: true })
  windDirection: number;

  @Column('float', { nullable: true })
  uv: number;
}
