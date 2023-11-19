// postgres.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(<string>process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['dist/src/modules/**/entities/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations.js'],
  cli: { migrationsDir: 'src/db/migrations' },
};
