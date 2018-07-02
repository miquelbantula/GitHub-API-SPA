import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface githubResponse {
  login: string,
  bio: string,
  company: string,
  avatar_url: string,
}



@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.scss'],
})



export class GitReposComponent implements OnInit {
  @Input() public parentData;
  @Input() updateUrl: Function;

  constructor(private http: HttpClient) {

  }

  userName = "";
  userPhotoLink = "";



  ngOnInit(): void {
    this.http.get<githubResponse>('https://api.github.com/users/'+this.parentData).subscribe(
      data => {
        this.userName = data.login;
        this.userPhotoLink = data.avatar_url;
    },

    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client side error");
      } else {
        console.log("Server side error");
      }
    })
  }

  updateUrl(value){
    console.log("updateUrl" value)
  }
}
