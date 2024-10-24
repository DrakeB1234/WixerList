import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { CategorylistComponent } from "../categorylist/categorylist.component";
import { FileexploreComponent } from "../fileexplore/fileexplore.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, FileexploreComponent, CategorylistComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
