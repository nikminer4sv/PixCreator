import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "info", pathMatch: "full" },
  { path: "info", loadChildren: () => import("./../index/index.module").then(m => m.IndexModule) },
  { path: "drawer", loadChildren: () => import("./../drawer/drawer.module").then(m => m.DrawerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
