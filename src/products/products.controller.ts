import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductDTO } from 'src/dto/peoductDto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post('add')
  addProduct(@Body() productDto: ProductDTO) {
    return this.productService.addProduct(productDto);
  }
  @Get('')
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Get('/:id')
  getProductByID(@Param('id') id: string) {
    return this.productService.getProductByID(id);
  }
  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() productDto: ProductDTO) {
    return this.productService.updateProduct(id, productDto);
  }
  @Delete('/:id')
  deleteProductByID(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
