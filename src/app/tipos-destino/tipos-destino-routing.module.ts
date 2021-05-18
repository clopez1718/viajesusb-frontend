import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetalleDestinoComponent } from '../destinos/pages/detalle-destino/detalle-destino.component';

const routes: Routes = [

  {
    path: '',
    component: ListadoComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: ':id',
        component: DetalleDestinoComponent
      },
      {
        path: '**',
        redirectTo : 'listado'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposDestinoRoutingModule { }
