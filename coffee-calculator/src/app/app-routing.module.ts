import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectRatioComponent } from './select-ratio/select-ratio.component';


const routes: Routes = [{
  path: '',
  component: SelectRatioComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
