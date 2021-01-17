import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControlModel, FormGroupModel } from '../../models/form.model';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, OnDestroy {

  @Input() control: FormControlModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.control.unsubscribe();
  }

  public isFormControlModel(): boolean {
    return this.control instanceof FormControlModel;
  }

  public getControls(group: FormGroupModel): Array<FormControlModel> {
    return Object.values(group.controls) as Array<FormControlModel>;
  }

}
