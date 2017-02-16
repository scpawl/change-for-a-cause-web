import { Activity } from '../activity/activity'
import { CheckIn } from './check-in';

export class Pledge {
  pledgeID: number;
  pledgeName: string;
  pledgeMemberActivityId: number;
  pledgeCauseId: number;
  pledgeStartDate: Date;
  pledgeEndDate: Date;
  pledgeUnits: number;
  pledgeComments: string;
  activity: Activity;
  active: boolean;
  causeName: string;
  completedUnits: number;
  earnedValue: number;
  checkInsForPledge: CheckIn[];
}
