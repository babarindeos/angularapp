import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html', 
    styleUrls: ['sandbox.component.css']
    /*styles:[`
        .special{
            color: green;
            text-transform: uppercase;
            font-size: 20px;
        }
   `]*/
})

export class SandboxComponent{

    name: string = "Joe Doe";
    age: number = 35;

    people = ['Rick', 'Daryl', 'Carl', 'Glen'];

    people2 = [
        {
            firstname: 'Rick',
            lastname: 'Grimes',
        },
        {
            firstname: 'Daryl',
            lastname: 'Dixon',
        },
        {
            firstname: 'Glen',
            lastname: 'Rhee',
        }
    ];


    constructor(){   
            this.people[2] = 'Carol';
        
    }   

   
}


