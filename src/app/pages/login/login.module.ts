import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './modal/recuperar-senha.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { LoginCadastroComponent } from './cadastro/login-cadastro.component';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginStoreModule } from 'src/app/store/login/login-store.module';

@NgModule({
  declarations: [LoginComponent, RecuperarSenhaComponent, LoginCadastroComponent, LoginLayoutComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
    LoginStoreModule
  ]
})
export class LoginModule { }
