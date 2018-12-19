import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   pageTitle: string = 'Product Detail';
   product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    // later on, do an http call to get product detail data for ID.
    // ============================================================

    this.pageTitle += ` : ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19,2016',
      'description': 'Leaf rate with 48-inch wooden handle.',
      'price': 9.95,
      'starRating': 3.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'



    }
  }

  OnBack(): void {
    this.router.navigate(['/products']);
    
  }

}
