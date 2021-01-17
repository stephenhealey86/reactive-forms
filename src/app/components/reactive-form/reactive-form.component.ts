import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormControlModel, FormGroupModel } from 'src/app/models/form.model';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(150%)' }),
        animate('500ms {{delay}} ease-in', style({ transform: 'none' })),
      ], { params: { delay: '1000ms'}}),
      transition(':leave', [
        style({ transform: 'none' }),
        animate('500ms {{delay}} ease-in', style({ transform: 'translateX(150%)' })),
      ], { params: { delay: '1000ms'}})
    ])
  ]
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
      ]),
      passwordGroup: new FormGroupModel({
        name: 'passwordGroup',
        validation: {
          passwordMatch: 'Your passwords must match.'
        }
      }, {
        password: new FormControlModel({
          label: 'Password',
          name: 'password',
          placeholder: 'Password',
          icon: 'fas fa-lock',
          validation: {
            required: 'Please enter your password.',
            minlength: 'Password needs to be 6 or more characters.',
          }
        }, '', [
          Validators.required,
          Validators.minLength(6)
        ]),
        confirmPassword: new FormControlModel({
          label: 'Confirm Password',
          name: 'confirmPassword',
          placeholder: 'Confirm Password',
          icon: 'fas fa-lock',
          validation: {
            required: 'Please confirm your password.',
            minlength: 'Password needs to be 6 or more characters.',
          }
        }, '', [
          Validators.required,
          Validators.minLength(6)
        ])
      }, [
        this.passwordValidator
      ])
    });
  }

  public getControls(): Array<FormControlModel | FormGroupModel> {
    return Object.values(this.form.controls) as Array<FormControlModel | FormGroupModel>;
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password.dirty && confirmPassword.dirty && password.value !== confirmPassword.value ? { passwordMatch: true } : null;
  }

}
