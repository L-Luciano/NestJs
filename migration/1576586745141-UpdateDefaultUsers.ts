import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateDefaultUsers1576586745141 implements MigrationInterface {
    name = 'UpdateDefaultUsers1576586745141'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isActive" bit NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "DF_fde2ce12ab12b02ae583dd76c7c" DEFAULT 0 FOR "isActive"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "DF_fde2ce12ab12b02ae583dd76c7c"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isActive" bit NOT NULL`, undefined);
    }

}
