import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUsersValidation1576677630143 implements MigrationInterface {
    name = 'UpdateUsersValidation1576677630143'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" nvarchar(255)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`, undefined);
    }

}
