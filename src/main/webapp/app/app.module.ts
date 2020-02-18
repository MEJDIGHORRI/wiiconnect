import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import './vendor';
import { WiiconnectSharedModule } from 'app/shared/shared.module';
import { WiiconnectCoreModule } from 'app/core/core.module';
import { WiiconnectAppRoutingModule } from './app-routing.module';
import { WiiconnectHomeModule } from './home/home.module';
import { WiiconnectEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    BrowserModule,
    WiiconnectSharedModule,
    WiiconnectCoreModule,
    WiiconnectHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WiiconnectEntityModule,
    WiiconnectAppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatSliderModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class WiiconnectAppModule {}
