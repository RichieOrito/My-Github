import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'result', component: ResultComponent},
  { path: '404', component: NotFoundComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:'search', pathMatch:'full'}, //I have created an empty path with the redirectTo property that points to the path of the searchComponent.
  { path: '**', redirectTo:'404', pathMatch:'full'} //I have then defined a route whose path has wildcards and directed this path to the NotFoundComponent.
];                                                  // The wildcards define a route that is not present in our routes array. So in the case a user tries to 
                                                    //look up a route that does not exist in the routes of our app, they will be taken to the not-found component
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
