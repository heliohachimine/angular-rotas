import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders, NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


