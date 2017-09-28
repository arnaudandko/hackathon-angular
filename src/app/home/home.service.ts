import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

/**
 * Public HomeService
 */
@Injectable()
export class HomeService {
    constructor(
        public http: Http
    ) {}

    public getHotel(hotelId: number): Observable<any> {
        console.log('home service');
        return this.http.get(`https://api.grandluxury.io/v1/hotels/${hotelId}`)
            .map(this.extractData)
            .map((data: any) => {
                return data;
            });
    }

    protected extractData(res: any) {
        return res.json() || { };
    }
}