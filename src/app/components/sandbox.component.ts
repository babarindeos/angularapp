import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>{{ name }} is {{ age }} years old.</h1>
               <h2> {{ person.firstname }} {{ person.lastname }} </h2>
               <ul>
                    <li>Helo World</li>
                    <li> {{ 1 + 1}}</li>
                    <li> {{ showAge() }}</li>
                    <li> {{ myitems }} </li>
               </ul>
    `
})

export class SandboxComponent{
    name: string = "John Doe";
    age: number = 35;
    isvalid: boolean = false;
    people: object = [];
    things: any = {};
    mynumbers: Array<number> = [1,2,3,4];
    skills: Array<string> = ['string','test','jump'];
    myitems: Array<any> = ['seyi', 2, true];
    //purse: Tuple
    you: undefined;
    //testing: null

    person = {firstname: 'Steve', lastname: 'Smith'};

    constructor(){
        console.log('Constructor ran ...');
        this.age = 47;
        this.hasBirthday();
        this.hasBirthday();
    }

    hasBirthday(){
        this.age++;
    }

    showAge(){
        return this.age;
    }
}
