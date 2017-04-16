export class PrayerDate{
    today : Date;
    todaysDate : string;

    constructor(){
        this.today = new Date();
        this.todaysDate = this.getWeekDayName() + ", " + this.getMonthName() + " " + this.today.getUTCDate() + ", " + this.today.getUTCFullYear();
    }
    
    getWeekDayName () {
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weekday[this.today.getDay()];
    }

    getMonthName = function() {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[this.today.getUTCMonth()];
    }
}