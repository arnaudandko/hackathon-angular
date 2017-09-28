import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

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
    public id: number = null;
    public myVar: string = 'hello';

    constructor(
        public http: Http,
        private route: ActivatedRoute,
    ) {
        this.route.params.subscribe((params: any) => {
            this.id = params.id;
            console.log(this.id);
            setTimeout(() => { this.myVar = 'salut' }, 10);
        });
        if(this.id) {
            this.getHotel(this.id).subscribe(hotel => {
                this.hotel = hotel;
                console.log(this.hotel);
            });
        }
    }

    ngOnInit() {
        this.message = 'Hello world';
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