import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user!: User;
  repo!: Repo;
  repos!: [];

  constructor(private http: HttpClient, private router: Router) { 
    this.user = new User("", "", "", 0, 0, 0, new Date(), "", "", "", "", new Date());
    this.repo = new Repo("", "", "");
    this.router = router;
  }

  getinfo(username: string){
    interface ApiResponseUser{
      login: string, name: string, location:string, followers: number, 
       following: number, public_repos: number, created_at: Date, hireable: string,
        avatar_url: string, html_url: string, bio: string, updated_at: Date
    }
    interface ApiResponserepo{
      name: string, description: string, url: string
    }

  }
}
