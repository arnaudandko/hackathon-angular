import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'home',
    template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit{
    public message: string;

    constructor(
        public http: Http
    ) {
    }

    ngOnInit() {
        this.message = 'Hello world';

        console.log(
            this.http.get(`https://api.grandluxury.io/v1/clients/300`)
                .map(this.extractData)
                .map((data: any) => {
                    console.log(data);
                    return data;
                })
        );

    }

    protected extractData(res: Response) {
        console.log(res.json());
        return res.json() || { };
    }
}