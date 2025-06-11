import { Component } from '@angular/core';
import { ActivitiesTableComponent } from '../activities-table/activities-table.component';
import { SummaryTagsComponent } from '../summary-tags/summary-tags.component';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { SelectEvent, TabStripModule } from '@progress/kendo-angular-layout';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-operation-layout',
  standalone: true,
  imports: [CommonModule,ActivitiesTableComponent,SummaryTagsComponent,FilterBarComponent,TabStripModule,HeaderLayoutComponent],
  templateUrl: './operation-layout.component.html',
  styleUrl: './operation-layout.component.scss'
})



export class OperationLayoutComponent {
  public selectedTabIndex = 0; 

  
 public tabs = [
  { title: 'ISPO' },
  { title: 'VDR' },
  { title: 'VDR Revision' },
  { title: 'VDR Finalization' },
  { title: 'OTD Trends' },
  { title: 'Engineering Productivity' },
  { title: 'Technical Alignment' }
];


 public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
