import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableUser1607648308466 implements MigrationInterface {
    name = 'AlterTableUser1607648308466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`);
    }

}
