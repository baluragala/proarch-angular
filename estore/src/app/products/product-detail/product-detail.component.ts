import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common"

@Component({
  selector: 'pro-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  q: any;
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {

  }

  ngOnInit() {
    console.log(this.route)
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.q = this.route.snapshot.queryParams;
  }

  goBack() {
    //this.router.navigate(['/list'])
    this.location.back()
  }

}
