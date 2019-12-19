import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUsersRole1576679042049 implements MigrationInterface {
    name = 'UpdateUsersRole1576679042049'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD "role" nvarchar(255) CHECK( role IN ('Admin','Moderator','User') ) NOT NULL CONSTRAINT "DF_ace513fa30d485cfd25c11a9e4a" DEFAULT 'User'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "DF_ace513fa30d485cfd25c11a9e4a"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`, undefined);
    }

}
