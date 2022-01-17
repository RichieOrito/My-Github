import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ProfileService } from '../profile.service';

import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, AfterViewInit {

  user!: User;
  repos: any;
  profileService!: ProfileService;
  isDoneLoading!: boolean;
  router: Router;
  browserRefresh!: boolean;

  constructor(profileService: ProfileService, router: Router) { 
    this.profileService = profileService;
    this.router = router;
  }

  ngAfterViewInit(){
    this.isDoneLoading = true;
  }

  ngOnInit(): void {
    this.isDoneLoading = false;
    this.browserRefresh = browserRefresh;
    this.user = this.profileService.user;
    this.repos = this.profileService.repos;
    if(browserRefresh){
      this.router.navigate(['../search']);
    }
  }

}
