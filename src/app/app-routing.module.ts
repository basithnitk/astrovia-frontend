import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BrokerComponent } from './broker/broker.component';
import { AdminComponent } from './admin/admin.component';
import { InvestorComponent } from './investor/investor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'investor', component: InvestorComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'broker', component: BrokerComponent },
  { path: 'admin', component: AdminComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
