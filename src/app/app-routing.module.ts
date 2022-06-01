import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login-user',
    loadChildren: () => import('./login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'rp',
    loadChildren: () => import('./rp/rp.module').then( m => m.RpPageModule)
  },
  {
    path: 'fg',
    loadChildren: () => import('./fg/fg.module').then( m => m.FgPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
