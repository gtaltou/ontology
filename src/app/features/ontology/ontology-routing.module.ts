import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionMenuComponent } from './components/action-menu/action-menu.component';

const routes: Routes = [
  { path: '', component: ActionMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OntologyRoutingModule {}
