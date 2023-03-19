import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rxStompServiceFactory } from './common/stomp/rx-stomp-service-factory';
import { RxStompService } from './common/stomp/rx-stomp.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/component/header/header.component';
import { ToastComponent } from './shared/component/toast/toast.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent,ToastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [{ provide: RxStompService, useFactory: rxStompServiceFactory }],
  bootstrap: [AppComponent],
})
export class AppModule {}
