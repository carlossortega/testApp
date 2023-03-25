import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: UsersComponent },
      { path: 'post', component: UserFormComponent },
      { path: 'edit/:id', component: UserFormComponent },
      { path: 'view/:id', component: UserViewComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
