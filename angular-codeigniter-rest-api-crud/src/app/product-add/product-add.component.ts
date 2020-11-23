import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

	@Input() product: Product = { name: '', price: '', sale_price: '', sales_count: '', sale_date: '' };
	
	constructor(private productService: ProductService, private location: Location) { }
	
	ngOnInit() {
	}
	
	save(): void {
		this.productService.addProduct(this.product).subscribe(() => this.goBack());
	}
	
	goBack(): void {
		this.location.back();
	}

}
