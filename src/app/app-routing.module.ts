import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from './count/count.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'count', component: CountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
