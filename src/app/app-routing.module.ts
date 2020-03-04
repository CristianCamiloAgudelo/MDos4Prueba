import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageActionsTableComponent } from './components/page-actions-table/page-actions-table.component';


const routes: Routes = [
  { path: "PageActions", component: PageActionsTableComponent},
  { path: "**", component: PageActionsTableComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
