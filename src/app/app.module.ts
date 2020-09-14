import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CorridasComponent } from './corridas/corridas.component';
import { MotoristasComponent } from './motoristas/motoristas.component';
import { PassageirosComponent } from './passageiros/passageiros.component';
import { EditComponentCorrida } from './corridas/edit/edit.component';
import { EditComponentMotorista } from './motoristas/edit/edit.component';
import { EditComponentPassageiro } from './passageiros/edit/edit.component';
import { ListComponentCorrida } from './corridas/list/list.component';
import { ListComponentMotorista } from './motoristas/list/list.component';
import { ListComponentPassageiro } from './passageiros/list/list.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorridasComponent,
    MotoristasComponent,
    PassageirosComponent,
    EditComponentCorrida,
    EditComponentMotorista,
    EditComponentPassageiro,
    ListComponentCorrida,
    ListComponentMotorista,
    ListComponentPassageiro


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
