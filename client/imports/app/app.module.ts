import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {RefillAddComponent} from './refill-add/refill-add.component';
import {RefillListComponent} from './refill-list/refill-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'refillList',
        component: RefillListComponent
      },
      {
        path: 'refillAdd',
        component: RefillAddComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/refillList',
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
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
