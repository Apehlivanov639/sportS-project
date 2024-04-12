import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products = [
    { name: 'Product 1', description: 'Description of Product 1', price: 50.99, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/503e9eea-02dd-4f8f-91e3-6ad74a9225cc/quest-5-road-running-shoes-NxdqjN.png' },
    { name: 'Product 2', description: 'Description of Product 2', price: 39.99, imageUrl: 'https://cdn.nba.com/manage/2022/01/image1-1-e1643120983945.png' },
    { name: 'Product 3', description: 'Description of Product 3', price: 79.99, imageUrl: 'https://static.hsnb.io/thumbor/oVoIcZSr6VAJAV7Bxnw93IbFix4=/1200x800/https://whatdropsnow.s3.amazonaws.com/cache/b6291067a0f4a5144275651ca3739fb9.jpg' },
    { name: 'Product 4', description: 'Description of Product 4', price: 19.99, imageUrl: 'https://www.shoepalace.com/cdn/shop/products/4a26048c51bab8d8b88e62549d8aa72c_2048x2048.jpg?v=1694025712&title=nike-bv2654-657-sportswear-club-fleece-pullover-mens-hoodie-red-white' },
    { name: 'Product 5', description: 'Description of Product 5', price: 49.99, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-rWtqPn.png' },
    { name: 'Product 6', description: 'Description of Product 6', price: 83.99, imageUrl: 'https://cdn.sportdepot.bg/files/catalog/detail/DQ9016-001_01.jpg' },
    { name: 'Product 7', description: 'Description of Product 7', price: 105.99, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d1dcb24-d4e6-4b40-a22d-cba7e4b57674/air-max-90-shoes-gpzwcp.png' },
    { name: 'Product 8', description: 'Description of Product 8', price: 37.99, imageUrl: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg' },
    { name: 'Product 9', description: 'Description of Product 9', price: 283.99, imageUrl: 'https://images.stockx.com/images/Balenciaga-x-adidas-Hoodie-Large-Fit-Green.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1667595042&q=60' },
    { name: 'Product 10', description: 'Description of Product 10', price: 270.99, imageUrl: 'https://images.stockx.com/images/Nike-Tech-Fleece-Full-Zip-Hoodie-Joggers-Set-Grey-v2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1683911597' },
    
  ];

  constructor(private router: Router, private cartService: CartService) { }

  buyNow(product: any) {
    // Add product to cart
    this.cartService.addToCart(product);
    // Navigate to cart page
    this.router.navigate(['/cart']);
  }


}