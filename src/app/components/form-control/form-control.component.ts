import { Component, Input, OnInit } from '@angular/core';
import { FormControlModel } from '../../models/form.model';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() control: FormControlModel;

  constructor() { }

  ngOnInit(): void {
  }

}
