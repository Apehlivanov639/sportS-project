import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../user/login/login.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent],
})
export class CoreModule { }
