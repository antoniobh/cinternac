import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

//Translate
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//Core App
import {
         Error404
       } from './core'

       // Export del translate
       export function createTranslateLoader(http: HttpClient) {
         return new TranslateHttpLoader(http, './assets/i18n/', '.json');
       }


@NgModule({
  imports: [
    //Translate Imports
    BrowserModule,
    HttpClientModule,
    TranslateModule
    .forRoot({
              loader: {
                  provide: TranslateLoader,
                  useFactory: createTranslateLoader,
                  deps: [HttpClient]
                      }
            }),

    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [
    AppComponent,
    Error404
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
