import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated'


import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { VersoFormComponent } from './verso-form/verso-form.component';
import { VersoComponent } from './verso/verso.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { AuthService } from './auth.service';

//Componentes externos
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    VersoFormComponent,
    VersoComponent,
    RegisterComponent,
    RegisterModalComponent,
    LoginModalComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,

    //Componentes externos
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthService,AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents:[
    RegisterComponent,
    RegisterModalComponent,
    LoginModalComponent,
    AppComponent
  ]
})
export class AppModule { }
