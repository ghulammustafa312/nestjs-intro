import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/interface/product.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async addProduct(productDto) {
    const product = new this.productModel(productDto);
    console.log(product);
    return await product.save();
  }
  async getAllProducts() {
    return await this.productModel
      .find({ deletedCheck: false })
      .sort({ createdAt: -1 });
  }

  async getProductByID(id) {
    return await this.productModel.findOne({ _id: id, deletedCheck: false });
  }

  async updateProduct(id, productDto) {
    return await this.productModel.updateOne({ _id: id }, productDto);
  }

  async deleteProduct(id) {
    return await this.productModel.updateOne(
      { _id: id },
      { deletedCheck: true },
    );
  }
}
