import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    checkoutForm: FormGroup;
    constructor(
        private carService: CartService,
        private formBuilder: FormBuilder,
    ) {
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
     }

    ngOnInit(): void {
        this.items = this.carService.getItems();
    }

    onSubmit(customerData): void{
        this.items = this.carService.clearCart();
        this.checkoutForm.reset();
        console.warn('Your order has been submitted', customerData);
    }

}
