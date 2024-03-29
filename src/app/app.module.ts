import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { rxStompServiceFactory } from './common/stomp/rx-stomp-service-factory'
import { RxStompService } from './common/stomp/rx-stomp.service'
import { NgbDateAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AuthentificationComponent } from './modules/user/authentification/authentification.component'
import { NgxSpinnerModule } from 'ngx-spinner'
import { ToastrModule } from 'ngx-toastr'
import { BasicAuthHttpInterceptor } from './common/interceptor/basic-auth-http.interceptor'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb'
import { CustomAdapter } from './common/adapter/date-adapter'
import { AngularSvgIconModule } from 'angular-svg-icon'
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent, AuthentificationComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, NgxSpinnerModule, ToastrModule.forRoot(), TranslateModule.forRoot({ defaultLanguage: 'fr', loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] } }), NgbModule, BreadcrumbModule, AngularSvgIconModule.forRoot()],
  providers: [BreadcrumbService, { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptor, multi: true }, { provide: RxStompService, useFactory: rxStompServiceFactory }, { provide: NgbDateAdapter, useClass: CustomAdapter }],

  bootstrap: [AppComponent],
})
export class AppModule {}
