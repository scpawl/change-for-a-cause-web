import {Component} from '@angular/core';

import { Pledge } from '../pledge/pledge';
import { Activity } from '../activity/activity';
import { Member } from '../member/member'
import { MemberService } from '../member/member.service';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    providers: [MemberService]
})

export class HomeComponent {
  constructor(private memberService: MemberService) { }

  member: Member = this.memberService.getMember();

  pledges: Pledge[] = [ //TODO: Replace this with mock data, then connect to full API
    {
      pledgeID: 1,
      pledgeName: 'pledge 1',
      pledgeUnits: 2,
      pledgeStartDate: new Date("2017-02-14 04:00"),
      pledgeEndDate: new Date("2017-02-28 04:00"),
      pledgeMemberActivityId: 1,
      pledgeCauseId: 1,
      pledgeComments: 'Something about this pledge',
      activity: null,
      active: true,
      causeName: 'FeedMore',
      completedUnits: 1,
      earnedValue: 10,
      checkInsForPledge: null
    },
    {
      pledgeID: 2,
      pledgeName: 'pledge 2',
      pledgeUnits: 5,
      pledgeStartDate: new Date('2017-02-14 04:00'),
      pledgeEndDate: new Date('2017-02-28 04:00'),
      pledgeMemberActivityId: 1,
      pledgeCauseId: 1,
      pledgeComments: 'Something about this pledge',
      activity: null,
      active: true,
      causeName: 'FeedMore',
      completedUnits: 1,
      earnedValue: 10,
      checkInsForPledge: null
    }
  ];

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

  amountSavedSoFar = 5.5;

}
