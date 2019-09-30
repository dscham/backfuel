import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {RefillAddComponent} from './refill-add/refill-add.component';
import {RefillListComponent} from './refill-list/refill-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'refills',
        component: RefillListComponent
      },
      {
        path: 'refills/new',
        component: RefillAddComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/refills',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    RefillAddComponent,
    RefillListComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
