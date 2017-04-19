import { Component } from '@angular/core';
import { PrayerDate } from './classes/PrayerDate';
import { ESV } from './classes/ESV';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Mark's Prayer Today";
  todaysDate = new PrayerDate().todaysDate; 
  //TODO: fix here
  todaysVerse = ""; //new ESV().todaysVerse;
}
