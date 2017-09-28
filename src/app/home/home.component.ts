import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [
        './styles/glh.css'
    ]
})
export class HomeComponent implements OnInit{
    public hotel: any;
    public id: number = null;

    constructor(
        public http: Http,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.id = params.id;
          if(this.id) {
            this.getHotel(this.id).subscribe(hotel => {
              this.hotel = hotel;
              console.log(this.hotel);
            });
          }
        });
    }

    private getHotel(hotelId: number): Observable<any> {
        return this.http.get(`https://api.grandluxury.io/v1/hotels/${hotelId}`)
            .map(this.extractData)
            .map((data: any) => {
                return data;
            });
    }

    protected extractData(res: Response) {
        return res.json() || { };
    }
}