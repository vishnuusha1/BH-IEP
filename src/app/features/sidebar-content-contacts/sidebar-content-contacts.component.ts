import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { TabStripModule } from "@progress/kendo-angular-layout";
import { IconsModule, SVGIcon } from "@progress/kendo-angular-icons";
import {
  arrowRightIcon,
  searchIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import {
  TreeViewModule,
} from "@progress/kendo-angular-treeview";
import { Observable, of } from "rxjs";
import { SelectedJobsService } from "../../core/service/selectedJob.service";
import { CommonModule } from "@angular/common";
import { ProjectService } from "../../core/service/project.service";

interface ProjectNode {
  id: string;
  text: string;
  hasChildren: boolean;
  expanded?: boolean; 
  checked: boolean;
  favorite?: boolean; 
  items?: ProjectNode[];
}

@Component({
  selector: "app-sidebar-content-contacts",
  standalone: true,
  imports: [
    CommonModule,
    TabStripModule,
    InputsModule,
    FormsModule,
    IconsModule,
    KENDO_BUTTONS,
    TreeViewModule,
  ],
  templateUrl: "./sidebar-content-contacts.component.html",
  styleUrl: "./sidebar-content-contacts.component.scss",
})
export class SidebarContentContactsComponent {
  mySearchTerm: string = "";
  public searchIcon: SVGIcon = searchIcon;
  public arrowRightSvg: SVGIcon = arrowRightIcon;
  public numberOfContracts: number = 104;

  public treeViewData: ProjectNode[] = [];
  public starOutlineSvg: SVGIcon = starOutlineIcon;
  public data: ProjectNode[] = [];

  public expandedKeys: any[] = [];

  public checkedKeys: any[] = [];

  @Input() searchTerm: string = "";
  @Output() search = new EventEmitter<string>();

  constructor(private selectedJobervice: SelectedJobsService,private projectService: ProjectService) {}

  ngOnInit(): void {

     this.projectService.getProjects().subscribe(data => {
      this.treeViewData = data;
    });

    this.data = this.treeViewData;
    this.selectedJobervice.updateProjectNames(this.checkedKeys.join(","));

  }

  onTabSelect(e: any): void {
    console.log("Selected tab index:", e.index);
  }

  onSearchTermChange(): void {
    console.log("Current search term:", this.mySearchTerm);
  }

  onAdvancedSearchClick() {
    console.log("Advanced Search button clicked!");
  }

  isItemChecked = (dataItem: any): boolean => {
    return this.checkedKeys.includes(dataItem.id);
  };


  public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
  public hasChildren = (dataItem: any): boolean => !!dataItem.items;


onCheckedKeysChange(keys: string[]) {
  
    this.selectedJobervice.updateProjectNames(this.checkedKeys.join(","));
  }
 


}
