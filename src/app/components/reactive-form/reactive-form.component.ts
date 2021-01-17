import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile, debounceTime } from 'rxjs/operators';
import { FormControlModel } from 'src/app/models/form.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControlModel({
        label: 'First Name',
        placeholder: 'First Name',
        name: 'firstname',
        validation: {
          required: 'Please enter your firstname.',
          minlength: 'Your first name must be atleast 3 characters.',
        },
        icon: 'fas fa-user'
      }, '', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  ngOnDestroy(): void {
  }

}
