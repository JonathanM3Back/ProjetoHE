import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './components/template/auth/auth.component';
import {AppComponent} from '../app/app.component';
import {AuthGuard} from './account/shared/auth.guard';
import { LoginComponent } from './account/login/login.component';

import { BodyComponent } from './components/template/body/body.component';

const routes: Routes = [
{ canActivate:[AuthGuard],
  path: '',
  component: AppComponent,
  children:[
    {path: '', redirectTo:'inicio',pathMatch:'full'},
    {path:'inicio',component: BodyComponent}
  ]

},
{
  path: '',
  component: AuthComponent,
  children:[
    {path: '',redirectTo:'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
