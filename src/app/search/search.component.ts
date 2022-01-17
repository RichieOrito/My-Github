import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username!: string;
  isNotEmpty!: boolean;
  profileService: ProfileService;  

  constructor(profileService: ProfileService, private router: Router) { 
    this.profileService = profileService;
  }

  initiateSearch(){
    if(this.username){
      this.profileService.getProfile(this.username);
      this.router.navigate(['../result']);
    }else{
      this.isNotEmpty = true;
    }
  }
  hideAlert(){
    this.isNotEmpty = false;
  }

  ngOnInit(): void {
    this.isNotEmpty = false;
  }

}
