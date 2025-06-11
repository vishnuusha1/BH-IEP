import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
// import { SidebarComponent } from '../../sidebar/sidebar.component';
import { AuthService, User } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { menuIcon, inboxIcon } from '@progress/kendo-svg-icons';
import { SVGIcon } from '@progress/kendo-svg-icons';
import { DrawerComponent, DrawerSelectEvent } from '@progress/kendo-angular-layout';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,SidebarComponent,CommonModule,HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  drawerExpanded = true;
  public items = [
    { text: 'Inbox', svgIcon: inboxIcon, selected: true }
  ];

  toggleDrawer(): void {
    this.drawerExpanded = !this.drawerExpanded;
  }

  onSelect(e: DrawerSelectEvent): void {
    console.log('Selected item:', e.item.text);
  }
}
