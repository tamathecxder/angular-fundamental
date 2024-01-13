import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishitem';

const filters = [
  (items: WishItem) => items,
  (items: WishItem) => !items.isComplete,
  (items: WishItem) => items.isComplete
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})

export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();

  listFilter: any = "0";

  ngOnInit(): void {
    this.changeFilter(this.listFilter);
  }

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
