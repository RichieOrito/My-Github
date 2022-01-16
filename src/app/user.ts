export class User {
  constructor(public login: string, public name: string, public location: string, public followers: number, 
    public following: number, public public_repos: number, public created_at: Date, public hireable: string,
     public avatar_url: string, public html_url: string, public bio: string, public updated_at: Date){}
     //inside the constructor function I have passed the user properties from the github api i'd want displayed
     //The constructor function enables us to define the initialization logic for creating an object.
}
