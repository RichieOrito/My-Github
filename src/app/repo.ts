export class Repo {
  constructor( public name: string,public description: string, public forks_count: number, public language: string, public svn_url: string){}
  //inside the constructor function I have passed the repo properties from the github api i'd want displayed
  //The constructor function enables us to define the initialization logic for creating an object.
}
