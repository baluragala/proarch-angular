import { Feature } from './../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pro-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input()
  feature: Feature;
  constructor() { }

  ngOnInit() {
  }

}
