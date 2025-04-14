import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserService } from '../service/user.service';
import { AuthService, User } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,SidebarComponent,NavbarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isSidebarCollapsed = false
  currentUser: User | null = null
  users: any[] = []
  isLoading = true
  error: string | null = null


  constructor(private userService:UserService,private authService:AuthService){
    
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user
    })

    this.loadUsers()
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed
  }

  loadUsers(): void {
    this.isLoading = true
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data
        this.isLoading = false
      },
      error: (err) => {
        this.error = "Failed to load users. Please try again later."
        this.isLoading = false
        console.error("Error fetching users:", err)
      },
    })
  }
}
