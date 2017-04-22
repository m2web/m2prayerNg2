import { Component, OnInit } from '@angular/core';
import { PrayerDate } from './classes/PrayerDate';
import { ESVService } from './classes/ESVService';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ESVService]
})
export class AppComponent  implements OnInit{
  title = "Mark's Prayer Today";
  todaysDate = new PrayerDate().todaysDate; 
  todaysVerse: string;
	error: any;

  constructor( private esv: ESVService ) { }

  getTodaysVerse(): void{
    try{	
      this.todaysVerse = this.esv.getTodaysVerse();
    } catch (e) {
        this.error = e;
        console.log(e.status);
    }
	}

  ngOnInit(): void {
    this.getTodaysVerse();
  }
}
