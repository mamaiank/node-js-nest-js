import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    TodoModule,
    TypeOrmModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/testing'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
