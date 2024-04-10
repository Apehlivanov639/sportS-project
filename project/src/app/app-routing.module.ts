import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { RegisterComponent } from './user/register/register.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products-list', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
