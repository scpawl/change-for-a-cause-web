import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ActivityComponent} from './activity/activity.component';
import {PledgesComponent} from './pledge/pledges.component';
import {ProfileComponent} from './member/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ActivityComponent,
        PledgesComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
