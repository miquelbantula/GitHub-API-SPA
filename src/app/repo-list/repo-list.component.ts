import { Component, OnInit} from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface githubReposResponse {
  id: string,
  name: string,

}


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  repo = [];


  ngOnInit(): void {
    this.http.get<githubReposResponse>('https://api.github.com/users/w3schools/repos').subscribe(
      repos => {
        this.repo = repos;
    },

    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client side error");
      } else {
        console.log("Server side error");
      }
    })
  }
}
