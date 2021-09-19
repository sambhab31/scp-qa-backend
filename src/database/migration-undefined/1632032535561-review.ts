import {MigrationInterface, QueryRunner} from "typeorm";

export class review1632032535561 implements MigrationInterface {
    name = 'review1632032535561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reviews" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "is_archived" boolean NOT NULL DEFAULT false, "create_date_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying(300) NOT NULL DEFAULT 'self', "last_changed_date_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_changed_by" character varying(300) NOT NULL DEFAULT 'self', "internal_comment" character varying(300), "video_hash" character varying NOT NULL, "review" jsonb NOT NULL, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reviews"`);
    }

}
