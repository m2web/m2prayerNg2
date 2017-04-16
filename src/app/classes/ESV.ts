import { Http} from '@angular/http';

export class ESV {
    todaysVerse: string;
    private http: Http;

    constructor(){
        this.todaysVerse = this.getTodaysVerse();
    }

    getVerse (verse: string): string  {
        var base_url = "http://www.esvapi.org/v2/rest/passageQuery?key=687d2878725c2801"

        verse = verse.replace(/\s/, "+");
        verse = verse.replace(/\:/, "%3A");
        verse = verse.replace(/\,/, "%2C");
        
        return this.httpGet(base_url + "&passage=" + verse + "&" + this.getVerseOptions());
    }

    getTodaysVerse (){
        var base_url = "http://www.esvapi.org/v2/rest/dailyVerse?key=687d2878725c2801&"
        return this.httpGet(base_url + this.getVerseOptions());
    }


    httpGet (theUrl: string)
    {	
        return (() => this.http.get(theUrl)).toString();
    }

    getVerseOptions (){
	return [
		"include-short-copyright=0",
		"include-passage-horizontal-lines=0",
		"include-heading-horizontal-lines=0",
		"include-footnotes=false",
		"include-short-copyright=false",
		"include-subheadings=false",
		"include-headings=false",
		"include-content-type=false"].join('&');
    }

}