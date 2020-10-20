import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './products/product.model';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'cuponatic',
      models: [Product],
    }),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule { }
