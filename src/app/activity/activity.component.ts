import { Component } from '@angular/core';

import { Activity } from './activity'

@Component({
  selector: 'activity',
  templateUrl: './app/activity/activity.component.html',
  providers: []
})

export class ActivityComponent {

  activities: Activity[] = [  //TODO: Replace this with mock data, then connect to full API
    {
      activityName: 'Bike to Work',
      activityDescription: 'Ride my bike to and from work one day to save gas money',
      activityID: 1
    },
    {
      activityName: 'Pack my Lunch',
      activityDescription: 'Pack my lunch for a day',
      activityID: 2
    },
    {
      activityName: 'Skip my Coffee',
      activityDescription: 'Skip purchasing coffee at Starbucks and drink the free tea instead',
      activityID: 3
    }
  ];

}
