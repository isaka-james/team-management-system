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
  teamNo: number = 0;
  groupedList: string[][] = [];



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


  onChangeTeams(teamsNo: string){
      const teamsNoRef: number = parseInt(teamsNo);
      if(teamsNoRef<1 || teamsNoRef==null){
          return;
      }
      this.teamNo = teamsNoRef;



  }

  showTeams(){
    if(this.members.length==0 ){
      this.errorMsg = 'No members added!';
      return;
    }

    if(this.teamNo==0 || this.teamNo>this.members.length){
      this.errorMsg = 'Enter number of Teams!';
      return;
    }
    if(this.groupedList.length>0){
      this.errorMsg = 'Refresh Page!';
      return;
    }

    // creating a copy of the members
    let copyMembers: Array<string> = [...this.members];

    for(let i=copyMembers.length -1; i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [copyMembers[i],copyMembers[j]] = [copyMembers[j],copyMembers[i]];
    }

    const numGroups = Math.floor(copyMembers.length / this.teamNo);


    for(let i=0;i<numGroups;i++){
      const startIx = i*this.teamNo;
      const endIx = (i+1)*this.teamNo;
      this.groupedList.push(copyMembers.slice(startIx,endIx));
    }

    if(copyMembers.length % this.teamNo !== 0){
      this.groupedList.push(copyMembers.slice(numGroups * this.teamNo));
    }


    console.log(`The grouped List: ${this.groupedList}`);


  }
  

}
