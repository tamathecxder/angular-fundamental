import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})

export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = "";

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = "";
  }
}
