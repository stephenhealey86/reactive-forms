import { AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';

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

    constructor(config: IExtendedAbstractControl, formState: any = null,
                validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
                asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(formState, validatorOrOpts, asyncValidator);

        this.label = config.label;
        this.name = config.name;
        this.icon = config.icon;
        this.placeholder = config.placeholder;
        this.validation = config.validation;
    }
}
