import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';


interface MenuItem {
  icon: string
  label: string
  route?: string
  expanded?: boolean
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() isCollapsed = false
  @Output() toggleSidebar = new EventEmitter<void>()

  menuItems: MenuItem[] = [
    {
      icon: "dashboard",
      label: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: "folder",
      label: "File Manager",
      route: "/analytics",
    },
    {
      icon: "mail",
      label: "Letter Box",
      route: "/analytics",
    },
    {
      icon: "task",
      label: "Tasks",
      route: "/analytics",
    },
    {
      icon: "live_help",
      label: "FAQ",
      route: "/analytics",
    },
  ]
}
