import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControlModel, FormGroupModel } from '../../models/form.model';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
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
export class FormControlComponent implements OnInit, OnDestroy {

  @Input() control: FormControlModel;
  @Input() delay: number;
  @Input() offset: number;

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
