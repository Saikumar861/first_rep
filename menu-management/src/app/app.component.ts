import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMenuItemComponent } from './components/add-menu-item/add-menu-item.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddMenuItemComponent,MenuListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu-management';
}
