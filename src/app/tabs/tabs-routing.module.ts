import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'resumen',
        loadChildren: () => import('../secciones/resumen/resumen.module').then(m => m.ResumenModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('../secciones/promociones/promociones.module').then(m => m.PromocionesModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('../secciones/ayuda/ayuda.module').then(m => m.AyudaModule)
      },
      {
        path: 'categoria',
        loadChildren: () => import('../secciones/categorias/categorias.module').then(m => m.CategoriasModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../secciones/perfil/perfil.module').then(m => m.PerfilModule)
      },
      {
        path: 'retiro',
        loadChildren: () => import('../secciones/no-disponible/no-disponible.module').then(m => m.NoDisponibleModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('../secciones/carrito/carrito.module').then(m => m.CarritoModule)
      },
      {
        path: 'detalle',
        loadChildren: () => import('../secciones/detalle/detalle.module').then(m => m.DetalleModule)
      },
      {
        path: '',
        redirectTo: 'tabs/resumen',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/resumen',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
