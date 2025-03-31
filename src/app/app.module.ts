// TODO ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// TODO RUTAS
import { AppRoutingModule } from './app-routing.module';

// TODO COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';

// TODO FIREBASE
import { AngularFireModule } from "@angular/fire/compat";
import { env } from 'src/env/env';
import { AdminDashboardComponent } from './components/layout/admin/admin-dashboard/admin-dashboard.component';
import { ProveedorDashboardComponent } from './components/layout/proveedor/proveedor-dashboard/proveedor-dashboard.component';
import { UserDashboardComponent } from './components/layout/user/user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    NovedadesComponent,
    LoginComponent,
    RegistrarseComponent,
    AdminDashboardComponent,
    ProveedorDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
