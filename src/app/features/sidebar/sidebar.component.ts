import { Component } from "@angular/core";
import { DrawerItem, DrawerSelectEvent } from "@progress/kendo-angular-layout";
import {
  SVGIcon,
  bellIcon,
  calendarIcon,
  envelopeLinkIcon,
  inboxIcon,
  gridIcon,
  menuIcon,
  folderAddIcon,
  folderIcon,
  checkCircleIcon,
  userIcon,
  wrenchIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";

import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { DrawerService } from "../../core/service/drawer.service";
import { ChangeDetectorRef } from "@angular/core";
import { SidebarContentComponent } from "../sidebar-content/sidebar-content.component";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { OperationLayoutComponent } from "../dashboard/component/operation-layout/operation-layout.component";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    ButtonsModule,
    SidebarContentComponent,
    KENDO_ICONS,
    OperationLayoutComponent,
  ],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  public selected = "Operation";
  public menuSvg: SVGIcon = menuIcon;

  public items: Array<{
    text: string;
    disbaled?: boolean;
    icon: string;
    iconStyle?: "filled" | "outlined";
    separator?:boolean,
    selected?: boolean
  }> = [
    {
      text: "Home", icon: "device_hub", iconStyle: "outlined",
      selected: false
    },
    {
      text: "",
      disbaled: true,
      icon: "",
      selected: false
    },
    {
      text: "",
      disbaled: true,
      icon: "",
      selected: false
    },
    {
      separator: true,
      text: "",
      icon: "",
      selected: false
    },

    { text: "Operation", icon: "apps", iconStyle: "outlined",selected: true },

    {
      text: "Otr", icon: "create_new_folder", iconStyle: "outlined",
      selected: false
    },

    {
      text: "Npd", icon: "folder", iconStyle: "outlined",
      selected: false
    },
    {
      text: "Ispo", icon: "check_circle", iconStyle: "outlined",
      selected: false
    },
    {
      text: "Settings", icon: "engineering", iconStyle: "outlined",
      selected: false
    },

    { text: "Help", icon: "settings", iconStyle: "outlined" },
  ];
  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

  drawerExpanded = false;
  private sub!: Subscription;

  constructor(
    private drawerService: DrawerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.drawerService.drawerState$.subscribe((state: boolean) => {
      this.drawerExpanded = state;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getIconClass(style?: string): string {
    return style === "outlined" ? "material-icons-outlined" : "material-icons";
  }
}
