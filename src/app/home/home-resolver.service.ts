import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot } from '@angular/router';

import { HomeService }  from './home.service';

@Injectable()
export class HomeResolverService implements Resolve<any> {
    constructor(private hs: HomeService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log('okkkk');
        let id = Number(route.paramMap.get('id'));

        return this.hs.getHotel(id).take(1).map(hotel => {
            if (hotel) {
                console.log('ok hotel');
                console.log(hotel);
                return hotel;
            } else { // id not found
                // this.router.navigate(['/']);
                return null;
            }
        });
    }
}