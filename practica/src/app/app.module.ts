import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './view/login/login.component';
import { WellcomeComponent } from './view/wellcome/wellcome.component';
import { ListUserComponent } from './view/list-user/list-user.component';
import { UserDetailComponent } from './view/user-detail/user-detail.component';

// Para usar formularios incluimos estas directivas
import { FormsModule} from '@angular/forms';
// Fin de imports para uso de formularios

// Para usar servicios Web incluimos estas directivas
import { HttpClientModule} from  '@angular/common/http';
import { ListResourceComponent } from './view/list-resource/list-resource.component';
// Fin de imports para uso de servicios Web




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    WellcomeComponent,
    ListUserComponent,
    UserDetailComponent,
    ListResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    // Para usar servicios Web incluimos estas directivas
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
