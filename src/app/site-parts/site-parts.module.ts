import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitePartsRoutingModule } from './site-parts-routing.module';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  declarations: [CardsComponent, LoginComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    SitePartsRoutingModule
  ],
  exports: [CardsComponent, LoginComponent, CreateAccountComponent]
})
export class SitePartsModule { }
