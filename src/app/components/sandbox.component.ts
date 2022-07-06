import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector: 'sandbox',
    template: `<h1>{{ name }} is {{ age }} years old.</h1>
    <ul>
        <li> {{ customer.name }} -  {{ customer.email }}</li>
    </ul>
               
    `
})

export class SandboxComponent{

    name: string = "Joe Doe";
    age: number = 35;

    //customer: { id: number, name: string, email: string };
    customer: Customer;

    customers: Customer[];

    constructor(){
        this.customer = {
            id: 1,
            name: 'Seyi',
            email: 'seyibabs@gmail.com',
        };

        this.customers = [
            {
                id: 1,
                name: 'Seyi',
                email: 'seyibabs@gmail.com',
            },
            {
                id: 2,
                name: 'Brad',
                email: 'brad@gmail.com',
            },
            {
                id: 3,
                name: 'Kings',
                email: 'Kings@gmail.com',
            }
        ];
    }   

   
}


