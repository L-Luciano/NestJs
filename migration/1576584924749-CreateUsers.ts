import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1576584924749 implements MigrationInterface {
    name = 'CreateUsers1576584924749'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_cace4a159ff9f2512dd42373760" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(50) NOT NULL, "firstName" nvarchar(255) NOT NULL, "age" int NOT NULL, "isActive" bit NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
