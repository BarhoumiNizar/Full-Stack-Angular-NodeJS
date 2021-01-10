import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full'},
 { path : 'clients', component:UsersComponent},
 { path : 'Ajouter', component:AddUserComponent},
 { path: 'users/:id', component: DetailUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
