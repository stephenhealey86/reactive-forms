import { AbstractControlOptions, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export interface IExtendedAbstractControl {
    label?: string;
    name: string;
    icon?: string;
    placeholder?: string;
    validation?: {};
    errorMessages?: Array<string>;
}

export class FormControlModel extends FormControl implements IExtendedAbstractControl {
    label?: string;
    name: string;
    icon?: string;
    placeholder?: string;
    validation?: {};
    errorMessages?: Array<string>;

    private debounce = 500;
    private sub: Subscription;

    constructor(config: IExtendedAbstractControl, formState: any = null,
                validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
                asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(formState, validatorOrOpts, asyncValidator);

        this.label = config.label;
        this.name = config.name;
        this.icon = config.icon;
        this.placeholder = config.placeholder;
        this.validation = config.validation;

        this.sub = this.valueChanges.pipe(
            debounceTime(this.debounce)
        )
        .subscribe(() => {
            this.errorMessages = [];
            if (this.errors && this.dirty) {
                Object.keys(this.errors).forEach((messageKey) => {
                if (this.validation[messageKey]) {
                    this.errorMessages.push(this.validation[messageKey]);
                }
                });
            }
        });
    }

    public unsubscribe(): void {
        this.sub.unsubscribe();
    }
}

export class FormGroupModel extends FormGroup implements IExtendedAbstractControl {

    label?: string;
    name: string;
    icon?: string;
    placeholder?: string;
    validation?: {};
    errorMessages?: Array<string>;
    private debounce = 500;
    private sub: Subscription;

    constructor(config: IExtendedAbstractControl, formState: any = null,
                validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
                asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(formState, validatorOrOpts, asyncValidator);

        this.label = config.label;
        this.name = config.name;
        this.icon = config.icon;
        this.placeholder = config.placeholder;
        this.validation = config.validation;

        this.sub = this.valueChanges.pipe(
          debounceTime(this.debounce)
        )
        .subscribe(() => {
          this.errorMessages = [];
          if (this.errors && this.dirty) {
            Object.keys(this.errors).forEach((messageKey) => {
              if (this.validation[messageKey]) {
                this.errorMessages.push(this.validation[messageKey]);
              }
            });
          }
        });
    }

    public unsubscribe(): void {
      this.sub.unsubscribe();
    }
}
