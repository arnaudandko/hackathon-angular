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
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { hotel: any }) => {
                console.log(data);
                this.hotel = data.hotel;
            });
    }
}