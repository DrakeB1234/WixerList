import { Component, OnInit } from '@angular/core';
import listsData from '../../../test/lists.json';

@Component({
  selector: 'app-fileexplore',
  standalone: true,
  imports: [],
  templateUrl: './fileexplore.component.html',
  styleUrl: './fileexplore.component.css'
})
export class FileexploreComponent implements OnInit {
  lists: any = null;

  ngOnInit(): void {
    let tempList = listsData;

    // Organize list items by category
    tempList.lists.sort((a, b) => {
      let dateA = new Date(a.dateModified).getTime();
      let dateB = new Date(b.dateModified).getTime();

      return dateB - dateA || a.name.localeCompare(b.name);
    });

    this.lists = tempList;  }
}
