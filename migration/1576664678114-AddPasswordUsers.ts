import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPasswordUsers1576664678114 implements MigrationInterface {
    name = 'AddPasswordUsers1576664678114'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD "salt" nvarchar(255) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "salt"`, undefined);
    }

}
