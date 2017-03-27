import {Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    providers: []
})

export class HomeComponent {

  amountSavedSoFar = 5.5;
  showProfile = false;
  showPledges = true;
  showActivities = false;

  openProfile() {
    this.showProfile = true;
    this.showPledges = false;
    this.showActivities = false;
  };

  openPledges() {
    this.showPledges = true;
    this.showProfile = false;
    this.showActivities = false;
  };

  openActivities() {
    this.showActivities = true;
    this.showProfile = false;
    this.showPledges = false;
  };

}
