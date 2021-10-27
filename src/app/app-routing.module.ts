import { CustomerRegistrationFormComponent } from './customer-registration-form/customer-registration-form.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BranchComponent } from './branch/branch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'customer-registration-form',
    component : CustomerRegistrationFormComponent
  },
  {
    path : 'branch',
    component : BranchComponent
  },
  {
    path : 'detail-view',
    component : DetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
