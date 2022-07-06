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


    constructor(){   

        
    }   

   
}


