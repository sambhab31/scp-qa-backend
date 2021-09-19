import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

require('dotenv').config();

class ConfigService {
  constructor(private env: { [key: string]: string | undefined }) {}

  public getPort() {
    return process.env.NODE_API_PORT || true;
  }

  public isProduction() {
    return process.env.MODE === 'prod';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    const migrationString = `migration-${process.env.MODE}`;

    return {
      type: 'postgres',

      host: process.env.POSTGRES_HOST_STAGE,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME_STAGE,
      password: process.env.POSTGRES_PASSWORD_STAGE,
      database: process.env.POSTGRES_DATABASE_STAGE,

      entities: [__dirname + '/../entities/reviews.entity{.ts,.js}'],

      migrationsTableName: migrationString,

      migrations: [
        path.join(__dirname, `../database/${migrationString}/*{.ts,.js}`),
      ],

      // synchronize: process.env.MODE === "dev",
      synchronize: true,

      cli: {
        migrationsDir: `src/database/migration-${process.env.MODE}`,
      },

      // ssl: this.isProduction(),
      ssl: false,
    };
  }
}

const configService = new ConfigService(process.env);
export { configService };
