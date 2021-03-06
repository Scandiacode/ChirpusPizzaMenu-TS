import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  PizzaMenu: MenuItem[] = [    
    {
      item: "Chicken Fingers",
      category: "Dinner",
      price: 11.99
    },
    {
      item: "Pizza",
      category: "Dinner",
      price: 11.99
    },
    {
      item: "Wings",
      category: "Sides",
      price: 8.99
    },
    {
      item: "Breadsticks",
      category: "Sides",
      price: 4.99
    },
    {
      item: "Ceasar Salad",
      category: "Salads",
      price: 5.99
    },
    {
      item: "Cinnamon Roll",
      category: "Dessert",
      price: 8.99
    },
  ];
  SortByCategory(category:string):MenuItem[]{
    return this.PizzaMenu.filter((items:MenuItem) =>{
      return items.category == category;
    })
  }  
}
