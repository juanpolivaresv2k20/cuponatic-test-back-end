import { Body, Controller, Get, Post } from '@nestjs/common';

import { ProductsService } from './products.service';
import { SearchProductDto } from './dto/search-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  findAll(): string {
    return 'Prueba asdf';
  }

  @Post()
  find(@Body() searchProductDto: SearchProductDto): string {
    return 'Prueba qwerty';
  }
}
