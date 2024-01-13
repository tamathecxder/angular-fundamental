import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishitem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';

const filters = [
  (items: WishItem) => items,
  (items: WishItem) => !items.isComplete,
  (items: WishItem) => items.isComplete
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items : WishItem[] = [
    new WishItem("Learn Angular"),
    new WishItem("Museum Date"),
    new WishItem("Take a nap", true)
  ];

  title = 'Testing';
  newWishText: string = "";
  listFilter: any = "0";

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = "";
  }
}
