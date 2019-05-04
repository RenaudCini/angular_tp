import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pitchTitle1: string = "Pitch title 1";
  pitchTitle2: string = "Pitch title 2";
  pitchTitle3: string = "Pitch title 3";

  pitchCategory1: string = "Pitch catégorie 1";
  pitchCategory2: string = "Pitch catégorie 2";
  pitchCategory3: string = "Pitch catégorie 3";

  lastUpdate = new Date()

  pitches = [
    {
      title: "Pitch title 1",
      category: "Category 1"
    },
    {
      title: "Pitch title 2",
      category: "Category 2"
    },
    {
      title: "Pitch title 3",
      category: "Category 3"
    }
  ];

  title: string = 'Pitchup';
  siteDescription: string = 'The first social network to test your pitch';
  isAuth: boolean = false;

  setLoginTimeout()
  {
    console.log('def');
    setTimeout( () => {
        this.isAuth = true;
      }, 1000);
  }

  constructor()
  {
    console.log('abc');
    this.setLoginTimeout();
  }
}
