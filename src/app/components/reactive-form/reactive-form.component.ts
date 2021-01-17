import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  private validation = {
    firstname: {
      required: 'Please enter your firstname.',
      minlength: 'Your first name must be atleast 3 characters.',
    }
  };

  public errors = {} as {
    firstname: Array<string>
  };

  private formActive = true;
  private debounce = 500;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    Object.entries(this.form.controls).forEach(([name, control]) => {
      control.valueChanges.pipe(
        takeWhile(() => this.formActive),
        debounceTime(this.debounce)
      ).subscribe(() => {
        this.errors[name] = [];
        if (control.dirty && control.errors) {
          Object.keys(control.errors).forEach(key => {
            if (this.validation[name][key]) {
              this.errors[name].push(this.validation[name][key]);
            }
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.formActive = false;
  }

}
