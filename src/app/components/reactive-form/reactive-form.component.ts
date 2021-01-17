import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControlModel } from 'src/app/models/form.model';

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
      firstname: new FormControlModel({
        label: 'First Name',
        name: 'firstname',
        placeholder: 'First Name',
        icon: 'fas fa-user',
        validation: {
          required: 'Please enter your first name.',
          minlength: 'Your first name needs to be 3 or more characters.',
        }
      }, '', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastname: new FormControlModel({
        label: 'Last Name',
        name: 'lastname',
        placeholder: 'Last Name',
        icon: 'fas fa-user',
        validation: {
          required: 'Please enter your last name.',
          minlength: 'Your last name needs to be 3 or more characters.',
        }
      }, '', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControlModel({
        label: 'Email',
        name: 'email',
        placeholder: 'Email',
        icon: 'fas fa-envelope',
        validation: {
          required: 'Please enter your email.',
          minlength: 'Your first email must be valid.',
        }
      }, '', [
        Validators.required,
        Validators.email
      ])
    });
  }

  public getControls(): Array<FormControlModel> {
    return Object.values(this.form.controls) as Array<FormControlModel>;
  }

}
