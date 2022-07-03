import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/loginInPages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/loginInPages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/loginInPages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'sent-code',
    loadChildren: () => import('./pages/loginInPages/sent-code/sent-code.module').then( m => m.SentCodePageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/loginInPages/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
