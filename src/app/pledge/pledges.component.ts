import { Component } from '@angular/core';

import { Pledge } from './pledge';

@Component({
  selector: 'pledges',
  templateUrl: './app/pledge/pledges.component.html',
  providers: []
})

export class PledgesComponent {

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
}
