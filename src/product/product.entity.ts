import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    product_id: Number,
    product_name: String,
    product_price: Number,
  },
  { collection: 'product' },
);

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 255 })
  product_name: string;

  @Column()
  product_price: number;
}

export interface ProductInterface {
  product_id: number;
  product_name: string;
  product_price: number;
}
