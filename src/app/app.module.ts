import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BackgroundDirectiveDirective } from './background-directive.directive';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive.directive';
import { DatatableDirective } from './datatable.directive';
import { HostBindingDirective } from './host-binding.directive';
import { HostListenerDirective } from './host-listener.directive';
import { FlyingHeroesPipe, ReplaceAwith0Pipe } from './replace-awith0.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminDashboardComponent,
    BackgroundDirectiveDirective,
    CustomStructuralDirectiveDirective,
    DatatableDirective,
    HostBindingDirective,
    HostListenerDirective,
    ReplaceAwith0Pipe,
    FlyingHeroesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
