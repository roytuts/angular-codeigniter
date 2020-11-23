import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	products: Product[] = [];
	
	constructor(private route: ActivatedRoute, private productService: ProductService) { }
	
	ngOnInit() {
		this.getProducts();
	}
	
	getProducts(): void {
		this.productService.getProducts().subscribe(products => this.products = products);
	}
	
	delete(product: Product): void {
		this.productService.deleteProduct(product).subscribe(success => {this.getProducts();});
	}

}
