import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { UserDetailComponent } from './view/user-detail/user-detail.component';
import { ListUserComponent } from './view/list-user/list-user.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listUsers', component: ListUserComponent},
  { path: 'userDetail', component: UserDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
