import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homes', pathMatch: 'full' },
  { path: 'homes', loadChildren: './pages/homes/homes.module#HomesPageModule' },
  { path: 'new-item', loadChildren: './pages/new-item/new-item.module#NewItemPageModule' },
  { path: 'update-item/:id', loadChildren: './pages/update-item/update-item.module#UpdateItemPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
