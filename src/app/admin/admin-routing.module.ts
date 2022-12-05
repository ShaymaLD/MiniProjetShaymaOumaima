import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './home/home.component';
import { AjouterProduitComponent } from './nos-produit/ajouter-produit/ajouter-produit.component';
import { NosProduitComponent } from './nos-produit/nos-produit.component';

const routes: Routes = [
  
  { path:'admin',
  children:[ 
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: AuthentificationComponent},  
    {path:'dashboard', component: DashboardAdminComponent,
   children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'nosProduit', component:NosProduitComponent },
    {path:"njoutProd",title:"ajoutProd",component:AjouterProduitComponent}
   ]}
  ]}
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
