import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: [
    './styles/glh.css'
  ]
})
export class HomeComponent implements OnInit{
    public message: string;
    public hotel: any;
    public hotelId: number = null;
    public loaded: boolean = false;

    constructor(
        private route: ActivatedRoute,
        public http: Http
    ) {
        this.route.params.subscribe((params: any) => {
            if (params.id) {
                this.hotelId = params.id;
            }
        });
    }

    ngOnInit() {
        this.message = 'Hello world';
        if(this.hotelId) {
            this.getHotel(this.hotelId).subscribe(hotel => {
                this.loaded = true;
                this.hotel = hotel;
                console.log(this.loaded);
            });
        }

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