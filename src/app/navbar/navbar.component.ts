import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService, User } from '../service/auth.service';
import { Router, RouterModule } from '@angular/router';


interface DropDownItem {
  icon: string
  label: string
  route?: string
  expanded?: boolean
}


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter()

  currentUser: User | null = null
  isProfileMenuOpen = false

  dropDownItems: DropDownItem[] = [
    {
      icon: "person",
      label: "My Profile",
      route: "/dashboard",
    },
    {
      icon: "settings",
      label: "Account Settings",
      route: "/analytics",
    },
    {
      icon: "help",
      label: "Help Center",
      route: "/analytics",
    },
  ]
  constructor(
    private authService: AuthService,
    private router: Router,
  ){
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user
    })
  }
  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen
  }


  get avatarUrl(): string {
    const name = this.currentUser?.username || 'User';
    const encodedName = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encodedName}&background=4299e1&color=fff&rounded=true`;
  }
  

  logout(): void {
    this.authService.logout()
    this.router.navigate(["/login"])
  }
}
