import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AchatComponent } from './components/achat/achat.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'produites' },
  { path: 'produites', component: AccueilComponent },
  { path: 'achats', component: AchatComponent },
  { path: 'statistiques', component: StatistiqueComponent },
  { path: 'pagination', component: PaginationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
