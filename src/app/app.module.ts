import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileService } from './profile.service';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    NotFoundComponent,
    DateCountPipe,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
