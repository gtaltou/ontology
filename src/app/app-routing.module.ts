import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ontology',
    loadChildren: () =>
      import('./features/ontology/ontology.module').then((m) => m.OntologyModule),
  },
  { path: '**', redirectTo: 'ontology' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

