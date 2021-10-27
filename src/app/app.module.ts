import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/Material.module';
import { BranchComponent } from './branch/branch.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { CustomerRegistrationFormComponent } from './customer-registration-form/customer-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    DetailViewComponent,
    CustomerRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
