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
import { NotificationsComponent } from './feature/notification/notifications/notifications.component';
import { BooleanPipe } from './shared/directives/boolean-pipe';
import { SideNaveComponent } from './shared/component/side-nav/side-nav.component';
import { AuthComponent } from './feature/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,SideNaveComponent,AuthComponent,
    ToastComponent,
    NotificationsComponent
  ],
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
