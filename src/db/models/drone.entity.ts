import { Field, ObjectType } from '@nestjs/graphql'
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @ObjectType()
  @Entity({ name: 'drone'})
  export default class Drone {
  
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
  
    @Field()
    @Column()
    image: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    address: string;

    @Field()
    @Column()
    battery: number;

    @Field()
    @Column({ name: 'max_speed'})
    maxSpeed: number;

    @Field()
    @Column({ name: 'average_speed'})
    averageSpeed: number;

    @Field()
    @Column()
    status: string;

    @Field()
    @Column()
    fly: number;
  
    @Field()
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
  
    @Field()
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  
}