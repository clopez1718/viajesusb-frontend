import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposDestinoRoutingModule } from './tipos-destino-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { DetalleTipoDestinoComponent } from './detalle-tipo-destino/detalle-tipo-destino.component';


@NgModule({
  declarations: [
    ListadoComponent,
    DetalleTipoDestinoComponent
  ],
  imports: [
    CommonModule,
    TiposDestinoRoutingModule
  ]
})
export class TiposDestinoModule { }
