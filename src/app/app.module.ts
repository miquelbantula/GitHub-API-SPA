import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitReposComponent } from './git-repos/git-repos.component';
import { RepoListComponent } from './repo-list/repo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GitReposComponent,
    RepoListComponent

  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
