import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    SignInComponent
  ]
  schemas: [NO_ERRORS_SCHEMA]
})
export class SignInModule { }
