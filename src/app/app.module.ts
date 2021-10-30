import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TableService} from './table.service';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    OrderModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
