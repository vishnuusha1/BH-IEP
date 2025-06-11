import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { KENDO_TOOLBAR } from "@progress/kendo-angular-toolbar";
import { IconsModule } from '@progress/kendo-angular-icons';
import {
  SVGIcon,
  bellIcon,
  menuIcon,
  questionSolidIcon,
} from "@progress/kendo-svg-icons";


import { LayoutModule } from "@progress/kendo-angular-layout";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { NavigationModule } from "@progress/kendo-angular-navigation";

import { CommonModule } from '@angular/common';
import { DrawerService } from '../../core/service/drawer.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [KENDO_TOOLBAR,ButtonsModule,IconsModule,
    LayoutModule,IndicatorsModule,NavigationModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

 userAvatar: string = '';
  userName: string = '';
  userNameInitial: string = '';

  menuSvg: SVGIcon = menuIcon;
  bellIcon: SVGIcon = bellIcon;
  questionIcon: SVGIcon = questionSolidIcon;



  public menuIcon: SVGIcon = menuIcon;
  public kendokaAvatar = "assets/navigation/appbar/kendoka-angular.png";

  constructor(private drawerService: DrawerService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://randomuser.me/api/')
      .subscribe((res) => {
        const user = res.results[0];
        this.userName = `${user.name.first} ${user.name.last}`;
        this.userNameInitial = user.name.first.charAt(0);
        this.userAvatar = user.picture.thumbnail;
      });
  }

  toggleDrawer() {
    this.drawerService.toggle();
  }

  onButtonClick(): void {
    console.log('Kendo button clicked!');
  }
}
