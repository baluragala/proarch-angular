import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pro-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name: { first: string, last: string } = { first: '', last: '' }
  constructor() { }

  ngOnInit() {
  }


  handleSubmit(f: NgForm) {
    console.log(f)
  }
}
