import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsTutComponent } from './components/tut/forms-tut/forms-tut.component';
import { HttpTutComponent } from './components/tut/http-tut/http-tut.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'customers/new',
        component: CustomersNewComponent,
      },
      {
        path: 'customers/:id',
        component: CustomersDetailsComponent,
      },
      {
        path: 'customers/:id/edit',
        component: CustomerEditComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      // {
      //   path: 'tut/http',
      //   component: HttpTutComponent,
      // },
      // {
      //   path: 'tut/forms',
      //   component: FormsTutComponent,
      // },
    ],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
