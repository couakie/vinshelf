import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { VinListComponent } from './vin-list/vin-list.component';
import { SingleVinComponent } from './vin-list/single-vin/single-vin.component';
import { VinFormComponent } from './vin-list/vin-form/vin-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { VinsService } from './services/vins.service';

const appRoutes: Routes = [
  {path: 'auth/signup',  component: SignupComponent},
  {path: 'auth/signin',  component: SigninComponent},
  {path: 'vins', canActivate: [AuthGuardService], component: VinListComponent},
  {path: 'vins/new', canActivate: [AuthGuardService],  component: VinFormComponent},
  {path: 'vins/view/:id', canActivate: [AuthGuardService], component: SingleVinComponent},
  { path: '', redirectTo: 'vins', pathMatch: 'full' },
  { path: '**', redirectTo: 'vins' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    VinListComponent,
    SingleVinComponent,
    VinFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    VinsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
