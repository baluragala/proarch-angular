import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


function validateTitle(c: FormControl) {

  if (c.value == "iphone")
    return { validateTitle: `${c.value} must not be iphone` }
  return null;
}


@Component({
  selector: 'pro-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {

  form: FormGroup
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('iphone', [Validators.required,
      Validators.minLength(5), Validators.maxLength(30),
        validateTitle]),
      price: new FormControl(),
      feature: new FormGroup({
        name: new FormControl(),
        desc: new FormControl
      })
    })
  }

}
