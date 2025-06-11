import { Component, Input } from '@angular/core';
import { SidebarContentContactsComponent } from '../sidebar-content-contacts/sidebar-content-contacts.component';
import { SidebarContentSettingsComponent } from '../sidebar-content-settings/sidebar-content-settings.component';

@Component({
  selector: 'app-sidebar-content',
  standalone: true,
  imports: [SidebarContentContactsComponent,SidebarContentSettingsComponent],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss'
})
export class SidebarContentComponent {
  @Input() selectedItem!: string;
}
