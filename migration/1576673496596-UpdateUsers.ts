import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUsers1576673496596 implements MigrationInterface {
    name = 'UpdateUsers1576673496596'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD "age" int`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" bit NOT NULL CONSTRAINT "DF_409a0298fdd86a6495e23c25c66" DEFAULT 0`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "DF_409a0298fdd86a6495e23c25c66"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "age"`, undefined);
    }

}
