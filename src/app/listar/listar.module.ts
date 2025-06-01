import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndefinidoPipe } from '../pipes/indefinido.pipe';
import { IonicModule } from '@ionic/angular';
import { ListarPageRoutingModule } from './listar-routing.module';
import { ListarPage } from './listar.page';
import { IdadeDirective } from '../Diretivas/idade.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPageRoutingModule,
    IndefinidoPipe,
    IdadeDirective
],
  declarations: [ListarPage]
})
export class ListarPageModule {}
