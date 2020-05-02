import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './product.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
