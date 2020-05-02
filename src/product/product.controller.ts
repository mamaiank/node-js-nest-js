import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getProduct(params.id);
  }

  @Post()
  create(@Body() product: Product) {
    console.log('post: ', product);
    this.service.createProductMongo(product);
    // return this.service.createProduct(product);
  }

  @Put()
  update(@Body() product: Product) {
    console.log(product);
    return this.service.updateProduct(product);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.service.deleteProduct(params.id);
  }
}
