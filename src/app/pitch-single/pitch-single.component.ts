import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pitch-single',
  templateUrl: './pitch-single.component.html',
  styleUrls: ['./pitch-single.component.css']
})
export class PitchSingleComponent implements OnInit {

  pitchScore: number = 0;

  @Input() pitchTitle: string;
  @Input() pitchCategory: string;
  @Input() isAuth: boolean;

  pitchContent: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..';

  //isAuth: boolean = false;

  getPitchTitle()
  {
    return this.pitchTitle;
  }

  onVoteUp()
  {
    this.pitchScore++;
  }
  onVoteDown()
  {
    this.pitchScore--;
  }

  getBgColor()
  {
    if (this.pitchCategory === 'Category 1')
    {
      return 'lightblue';
    }
    else if (this.pitchCategory === 'Category 2')
    {
      return 'silver';
    }
    else if (this.pitchCategory === 'Category 3')
    {
      return 'lightgreen';
    }
  }

  constructor()
  {
    // setTimeout( () => {
    //     this.isAuth = true;
    //   }, 1000);
  }

  ngOnInit() {
  }

}
