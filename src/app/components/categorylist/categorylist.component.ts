import { Component, OnInit } from '@angular/core';
import grocerylist from '../../../test/grocerylist1.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorylist.component.html',
})
export class CategorylistComponent implements OnInit {
  categoryList: typeof grocerylist | null = null;

  ngOnInit(): void {
    let tempList = grocerylist;

    // Organize list items by category
    tempList.items.sort((a, b) => {
      return a.category.localeCompare(b.category) || a.item.localeCompare(b.item)
    });

    this.categoryList = tempList;
  }
}
