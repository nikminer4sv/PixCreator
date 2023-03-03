import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "info", pathMatch: "full" },
  { path: "info", loadChildren: () => import("../pages/index/index.module").then(m => m.IndexModule) },
  { path: "drawer", loadChildren: () => import("../pages/drawer/drawer.module").then(m => m.DrawerModule) },
  { path: "gallery", loadChildren: () => import("../pages/gallery/gallery.module").then(m => m.GalleryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
