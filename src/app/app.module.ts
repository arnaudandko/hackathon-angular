import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            {path: 'hotel/:id', component: HomeComponent, pathMatch: 'full'},
        ]),
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {
}
