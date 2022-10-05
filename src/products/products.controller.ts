import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UpdateProductDto } from '../dto/update-product-dto';
import { ProductDTO } from '../dto/create-product-dto';
import { ProductsService } from './products.service';
import { SearchParams } from '../dto/search-params-dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('add')
  addProduct(@Body() productDto: ProductDTO) {
    return this.productService.addProduct(productDto);
  }
  @Get('')
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Get('/:id')
  getProductByID(@Param() params: SearchParams) {
    return this.productService.getProductByID(params.id);
  }
  @Put('/:id')
  updateProduct(
    @Param('id') params: SearchParams,
    @Body() productDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(params.id, productDto);
  }
  @Delete('/:id')
  deleteProductByID(@Param() params: SearchParams) {
    return this.productService.deleteProduct(params.id);
  }
}
