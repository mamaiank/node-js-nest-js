import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product, ProductInterface } from './product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectModel('product')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  async getProducts(user: Product): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getProduct(_id: number): Promise<Product[]> {
    return await this.productRepository.find({
      select: ['product_id', 'product_name', 'product_price'],
      where: [{ product_id: _id }],
    });
  }

  async createProduct(product: Product) {
    this.productRepository.save(product);
  }

  async createProductMongo(product: Product): Promise<ProductInterface> {
    const createProduct = new this.productModel(product);
    const result = await createProduct.save();
    console.log(result);
    return result;
  }

  async updateProduct(product: Product) {
    this.productRepository.update(product.product_id, product);
  }

  async deleteProduct(product: Product) {
    this.productRepository.delete(product);
  }
}
