import { Component, OnInit } from '@angular/core';
// import * as geolocation from './geolocation';
var geolocation = require('geolocation');
@Component({
    selector: 'fountain-online-order',
    template: `<h2>{{title}}</h2> <h3>lat: {{latitude}}</h3> <h3>lon: {{longitude}}</h3>`,
    templateUrl: 'feature.component.html'
})
export class OnlineOrderComponent implements OnInit {
    title: string;
    longitude: any;
    latitude: any;
   // coordinates: ICoordinates;
    constructor() {
        this.title  = 'Online Order';
        this.latitude = 'Tracking in progress..';
        this.longitude = 'Tracking in progress..';
    }

    ngOnInit() {
        console.log('online order working');
        geolocation.getCurrentPosition(function (err, position) {
        if (err) {throw err; };
        if (position) {
            //this.coordinates = position.coords;
            console.log('position' , JSON.stringify(position));

            console.log('latitude' , position.coords.latitude);
            this.latitude = position.coords.latitude;
            console.log('longitude' , position.longitude);
            this.longitude = position.coords.longitude;
        }
        });
    }
}

export interface ICoordinates {
    latitude: number;
    longitude: number;
}
