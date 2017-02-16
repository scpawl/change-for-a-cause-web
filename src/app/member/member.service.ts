import { Http, Response } from '@angular/http';
import { Member } from './member';

export class MemberService {
  constructor(private http: Http) { }

  getMembers() {
    return this.http.get('api/members')
      .map((response: Response) => <Member[]>response.json().data);
  }
}
