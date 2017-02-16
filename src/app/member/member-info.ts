import { Member } from './member';
import { Activity } from '../activity/activity'
import { Pledge } from '../pledge/pledge'

export class MemberInfo {
  member: Member;
  memberActivities: Activity[];
  pledges: Pledge[];
}
