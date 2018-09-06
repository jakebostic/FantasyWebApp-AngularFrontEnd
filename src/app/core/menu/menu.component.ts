import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    new Menu ('Home', '/home', 'Go to home'),
    new Menu ('Fantasy Teams', '/owner/list', 'View fantasy teams'),
    new Menu ('Players', '/player/list', 'View players'),
    new Menu ('NFL Teams', '/team/list', 'View teams'),
    new Menu ('About', '/about', 'About page')
  ];

  constructor() { }

  ngOnInit() {
  }

}
