import { Routes } from '@angular/router';
import { FormTemplateComponent } from './form-template/form-template.component';
import { CustomFormTemplateComponent } from './custom-form-template/custom-form-template.component';

export const routes: Routes = [
    { path: 'form-page', component: FormTemplateComponent },
    { path: 'custom-form-page', component: CustomFormTemplateComponent },
];
