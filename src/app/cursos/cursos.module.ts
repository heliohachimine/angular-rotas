import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './curso.routing.module';

 

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    exports:[],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent

    ],
    providers:[CursosService]
})
export class CursosModule{ }
