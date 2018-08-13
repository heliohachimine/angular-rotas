import { RouterModule } from '@angular/router';
import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule, Component } from '@angular/core';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CommonModule } from '@angular/common'; 

 

@NgModule({
    imports: [
        CommonModule,
        RouterModule 
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
