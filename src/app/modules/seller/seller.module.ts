import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerDefaultComponent } from './seller-default/seller-default.component';

const routes: Routes = [
  {
    path: '',
    component: SellerDefaultComponent,
    children: [
      { path: '', component: SellerHomeComponent },
      {
        path: 'account',
        loadChildren: () =>
          import('./seller-account/seller-account.module').then(
            (m) => m.SellerAccountModule
          ),
      },
      { path: 'login', component: SellerLoginComponent },
      { path: 'register/:step', component: SellerRegisterComponent },
      { path: 'register', redirectTo: 'register/1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    SellerHomeComponent,
    SellerRegisterComponent,
    SellerLoginComponent,
    SellerDefaultComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SellerModule {}
