import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HomeResolverService} from "./home/home-resolver.service";
import {HomeService} from "./home/home.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            {
                path: 'hotel/:id',
                component: HomeComponent,
                pathMatch: 'full',
                resolve: {
                    hotel: HomeResolverService
                }
            },
        ],{
            initialNavigation: 'enabled'
        }),
        HttpModule
    ],
    providers: [HomeResolverService, HomeService],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {
}
