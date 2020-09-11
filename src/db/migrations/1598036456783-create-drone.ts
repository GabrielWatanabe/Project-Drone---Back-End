import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDrone1598036456783 implements MigrationInterface {

    private table = new Table({
        name: 'drone',
        columns: [
        {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
        },
        {
            name: 'image',
            type: 'varchar',
        },
        {
            name: 'name',
            type: 'varchar',
            length: '255',
        },
        {
            name: 'address',
            type: 'varchar',
            length: '255',
        },
        {
            name: 'battery',
            type: 'integer',
        },
        {
            name: 'max_speed',
            type: 'decimal',
        },
        {
            name: 'average_speed',
            type: 'decimal',
        },
        {
            name: 'status',
            type: 'varchar',
            length: '255',
        },
        {
            name: 'fly',
            type: 'integer',
        },
        {
            name: 'created_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
        },
        {
            name: 'updated_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
        }
      ]
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);

    }

}
