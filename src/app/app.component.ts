import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
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
  listFilter: string = "0";

  get visibleItems(): WishItem[] {
    let value = this.listFilter;

    if (value === "0") {
      return this.items;
    } else if (value === "1") {
      return this.items.filter(item => !item.isComplete);
    } else if (value === "2") {
      return this.items.filter(item => item.isComplete);
    }

    return [];
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = "";
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
