import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(private carService:CartService) { }

  ngOnInit(): void {
      this.items = this.carService.getItems();
  }

}
