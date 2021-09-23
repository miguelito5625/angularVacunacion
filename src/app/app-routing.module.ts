import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorGuard } from './guards/administrador.guard';
import { HelloAdminComponent } from './paginas/admin/hello-admin/hello-admin.component';
import { PrincipalAdminComponent } from './paginas/admin/principal-admin/principal-admin.component';
import { CrearVacunasComponent } from './paginas/admin/vacunas/crear-vacunas/crear-vacunas.component';
import { ListarVacunasComponent } from './paginas/admin/vacunas/listar-vacunas/listar-vacunas.component';
import { LoginPageComponent } from './paginas/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    canActivate: [AdministradorGuard],
    component: PrincipalAdminComponent,
    children: [
      {
        path: '',
        component: HelloAdminComponent,
      },
      {
        path: 'vacunas/crear',
        component: CrearVacunasComponent
      },
      {
        path: 'vacunas/listar',
        component: ListarVacunasComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
