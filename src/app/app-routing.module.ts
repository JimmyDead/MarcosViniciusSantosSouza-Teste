import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorridasComponent } from './corridas/corridas.component';
import { HomeComponent } from './home/home.component';
import { MotoristasComponent } from './motoristas/motoristas.component';
import { PassageirosComponent } from './passageiros/passageiros.component';

const routes: Routes = [
  { path: 'corridas', component: CorridasComponent },
  { path: 'motoristas', component: MotoristasComponent },
  { path: 'passageiros', component: PassageirosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
