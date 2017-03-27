import { Component } from '@angular/core';

import { Member } from './member'
import { MemberService } from './member.service';

@Component({
  selector: 'profile',
  templateUrl: './app/member/profile.component.html',
  providers: [MemberService]
})

export class ProfileComponent {

  constructor(private memberService: MemberService) { }

  member: Member = this.memberService.getMember();

}
