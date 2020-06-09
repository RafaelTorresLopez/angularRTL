import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { UserDetailComponent } from './view/user-detail/user-detail.component';
import { ListUserComponent } from './view/list-user/list-user.component';
import { WellcomeComponent } from './view/wellcome/wellcome.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listUsers', component: ListUserComponent},
  { path: 'userDetail', component: UserDetailComponent},
  { path: 'wellcome', component: WellcomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
