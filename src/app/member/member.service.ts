import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Member } from './member';

@Injectable()
export class MemberService {
  constructor(private http: Http) { }

  member: Member;

  getMember(): Member {
    this.member = {
      memberID: 1,
      memberName: 'shannon',
      memberFaceBookId: 'abcdef',
      memberEmail: 'shannon@pawloski.com',
      memberRegisteredDate: new Date("2017-02-14 04:00"),
      memberLastActiveDate: new Date("2017-02-14 04:00"),
      memberCurrency: 'USD'
    }
    return this.member

    //return this.http.get('mock-data/member.json')
    //  .map((response: Response) => <Member>response.json().data);
  }
}
