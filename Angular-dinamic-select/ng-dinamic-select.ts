import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'app-dinamic-select',
    template: `
    <label for="stateSelect">Seleccione estado</label>
    <select id="stateSelect" (change)="setCities(state.value)" #state>
        <option *ngFor="let state of states" [value]="state">{{ state }}</option>
    </select>
    <label for="citySelect">Seleccione ciudad</label>
    <select id="citySelect">
        <option *ngFor="let city of cities" [value]="city">{{ city }}</option>
    </select>
    `
})

export class DinamicSelectComponent implements OnInit {
    states: Array<string>;
    cities: Array<string>;

    constructor() {
        this.cities = new Array();
    }

    readData() {
        let http: XMLHttpRequest;
        http = new XMLHttpRequest();
        http.open('GET', '/municipios-341c9-export.json', false);
        http.send();
        return http.response;
    }

    dataToArray() {
        let data: string;
        data = this.readData();
        let obj: Object;
        obj = JSON.parse(data);
        let arr: Array<any>;
        arr = Object.values(obj);
        return arr;
    }

    getStates() {
        let states: Array<any>;
        states = new Array();
        this.dataToArray().forEach( element => {
          states.push(element.nombre);
        });
        return states;
    }

    setCities( state: string ) {
        let found: Object;
        found = this.dataToArray().filter( element => {
          return element.nombre === state;
        });
        this.cities = found['municipios'];
      }

    ngOnInit() {
        this.states = this.getStates();
    }
}

