import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RxJsComponent } from './rx-js/rx-js.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'template-driven', component: TemplateDrivenFormsComponent},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'rx-js', component: RxJsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
