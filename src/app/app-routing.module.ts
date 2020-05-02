import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: 'task', pathMatch: 'full'},
      {path: 'task', component: TodoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
