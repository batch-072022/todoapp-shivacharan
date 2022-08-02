import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'listtask',component:ListtaskComponent},
  {path:'edit-task',component:EditTaskComponent},
  {path:'addtask',component:AddTaskComponent},
  {path:'viewuser',component:ViewUserComponent},
  {path:'users',component:ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
