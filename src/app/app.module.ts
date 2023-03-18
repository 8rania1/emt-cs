import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { rxStompServiceFactory } from './common/stomp/rx-stomp-service-factory';
import { RxStompService } from './common/stomp/rx-stomp.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [
    {provide: RxStompService,useFactory: rxStompServiceFactory,}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
