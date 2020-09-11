import { Field, InputType } from '@nestjs/graphql';

@InputType() 
export default class DroneInput {
    @Field()
    readonly image: string;

    @Field()
    readonly name: string;

    @Field()
    readonly address: string;

    @Field()
    readonly battery: number;

    @Field()
    readonly maxSpeed: number;

    @Field()
    readonly averageSpeed: number;

    @Field()
    readonly status: string;

    @Field()
    readonly fly: number;
}

export class DeleteDroneInput {
    @Field()
    readonly id: number;
}