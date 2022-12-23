import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrokerComponent } from './broker/broker.component';
import { HistoryComponent } from './admin/history/history.component';
import { StatementComponent } from './admin/statement/statement.component';
import { DetailsComponent } from './investor/details/details.component';
import { TradesComponent } from './investor/trades/trades.component';
import { HoldingsComponent } from './investor/holdings/holdings.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BrokerComponent,
    HistoryComponent,
    StatementComponent,
    DetailsComponent,
    TradesComponent,
    HoldingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
