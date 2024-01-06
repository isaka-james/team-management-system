import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  memberName: string = '';
  members: string[] = [];
  totalMembers: number = 0;
  errorMsg: string = '';


  onChangeInput(formMember: string){
    this.memberName = formMember;
    this.errorMsg = '';
  }


  addMember(){
    if(this.memberName.length<=0){
      this.errorMsg = 'Fill the name First!';
      return;
    }
    
    this.members.push(this.memberName);
    this.totalMembers += 1;
    this.memberName = '';
  }

  

}
