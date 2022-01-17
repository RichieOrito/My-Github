import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: User;
  repo: Repo;
  repos: any[] =[];


  constructor(private http: HttpClient, private router: Router) {
    this.user = new User("", "", "", 0, 0, 0, new Date(), "", "", "", "", new Date());
    this.repo = new Repo("", "", 0, "", "");
    this.router = router;
  }

  getData(username: string){
    interface ApiResponseUser{
      login: string, name: string, location:string, followers: number,
       following: number, public_repos: number, created_at: Date, hireable: string,
        avatar_url: string, html_url: string, bio: string, updated_at: Date,
    }

    interface ApiResponseRepo{
  
      name: string, description: string,  forks_count: number;
      language: string; svn_url: string;
    }

    let promise: any = new Promise((resolve, reject) => {
      this.http.get<ApiResponseUser>("https://api.github.com/users/" + username).toPromise().then(response => {
        this.user.login = response!.login;
        this.user.name = response!.name;
        this.user.location = response!.location;
        this.user.followers = response!.followers;
        this.user.following = response!.following;
        this.user.public_repos = response!.public_repos;
        this.user.created_at = response!.created_at;
        this.user.hireable = response!.hireable;
        this.user.avatar_url = response!.avatar_url;
        this.user.html_url = response!.html_url;
        this.user.bio = response!.bio;
        this.user.updated_at = response!.updated_at;

            resolve(response);
    },error => {
      let status = error.status;
      if (status == 404){
        this.router.navigate(['../404']);
      }
      reject(error);

      })

      this.http.get<ApiResponseRepo[]>("https://api.github.com/users/" + username + '/repos').toPromise().then(response =>{
       for (let i=0; i < response!.length; i++){
         this.repo.name = response![i].name;
         this.repo.description = response![i].description;
         this.repo.forks_count = response![i].forks_count;
         this.repo.language = response![i].language;
         this.repo.svn_url = response![i].svn_url;
         this.repo = new Repo(this.repo.name, this.repo.description, this.repo.forks_count, this.repo.language, this.repo.svn_url);
         this.repos.push(this.repo);
       }

       resolve(response);
      }, error => {
        let status = error.status;
        if (status == 404){
          this.router.navigate(['../404']);
        }
        reject(error);
      });
      console.log(this.repos)
      return promise;
      });

  }
}
