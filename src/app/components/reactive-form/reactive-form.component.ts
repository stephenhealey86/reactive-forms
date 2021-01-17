import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('')
    });
  }

}
