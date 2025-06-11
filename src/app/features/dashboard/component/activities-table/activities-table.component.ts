import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { KENDO_CHARTS } from "@progress/kendo-angular-charts";
import {
  DataBindingDirective,
  KENDO_GRID,
  KENDO_GRID_EXCEL_EXPORT,
  KENDO_GRID_PDF_EXPORT,
} from "@progress/kendo-angular-grid";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { process } from "@progress/kendo-data-query";
import { SVGIcon, fileExcelIcon, filePdfIcon } from "@progress/kendo-svg-icons";




export const sampleActivities: any[] = [
    {
      "projectId": "(406) 555-0120",
      "activityId": "(406) 555-0120",
      "activityType": "Rulestream",
      "activityName": "6391 Elgin St. Celina, Delaware 1029",
      "primaryResource": "Amanda Johnson",
      "earlyDate": "2024-10-14T00:00:00.000Z",
      "linked": true
    },
    {
      "projectId": "(239) 555-0108",
      "activityId": "(239) 555-0108",
      "activityType": "",
      "activityName": "1901 Thornridge Cir. Shiloh, Hawaii",
      "primaryResource": "Robert Fox",
      "earlyDate": "2024-10-14T00:00:00.000Z",
      "linked": false
    },
    {
      "projectId": "(406) 555-0120",
      "activityId": "(480) 555-0103",
      "activityType": "",
      "activityName": "4140 Parker Rd. Allentown, New Mexico",
      "primaryResource": "Savannah Nguyen",
      "earlyDate": "2024-10-14T00:00:00.000Z",
      "linked": false
    },
    {
      "projectId": "(480) 555-0103",
      "activityId": "(480) 555-0103",
      "activityType": "",
      "activityName": "4140 Parker Rd. Allentown, New Mexico",
      "primaryResource": "Savannah Nguyen",
      "earlyDate": "2024-10-14T00:00:00.000Z",
      "linked": false
    },
    {
      "projectId": "(505) 123-4567",
      "activityId": "(505) 123-4567",
      "activityType": "Approval",
      "activityName": "789 Oak Ave. Springfield, Illinois",
      "primaryResource": "Michael Davis",
      "earlyDate": "2024-11-01T00:00:00.000Z",
      "linked": true
    },
    {
      "projectId": "(718) 987-6543",
      "activityId": "(718) 987-6543",
      "activityType": "",
      "activityName": "101 Pine St. Boston, Massachusetts",
      "primaryResource": "Jessica Miller",
      "earlyDate": "2024-09-20T00:00:00.000Z",
      "linked": false
    },
    {
      "projectId": "(303) 222-3333",
      "activityId": "(303) 222-3333",
      "activityType": "Review",
      "activityName": "202 Maple Dr. Austin, Texas",
      "primaryResource": "Chris Wilson",
      "earlyDate": "2024-12-05T00:00:00.000Z",
      "linked": true
    },
    {
      "projectId": "(602) 111-2222",
      "activityId": "(602) 111-2222",
      "activityType": "",
      "activityName": "303 Birch Ct. Phoenix, Arizona",
      "primaryResource": "Patricia Garcia",
      "earlyDate": "2024-08-10T00:00:00.000Z",
      "linked": false
    },
    {
      "projectId": "(909) 444-5555",
      "activityId": "(909) 444-5555",
      "activityType": "Testing",
      "activityName": "404 Cedar Ln. Seattle, Washington",
      "primaryResource": "Daniel Martinez",
      "earlyDate": "2025-01-15T00:00:00.000Z",
      "linked": true
    },
    {
      "projectId": "(212) 666-7777",
      "activityId": "(212) 666-7777",
      "activityType": "",
      "activityName": "505 Elm Rd. New York, New York",
      "primaryResource": "Laura Rodriguez",
      "earlyDate": "2024-11-22T00:00:00.000Z",
      "linked": false
    }
]
    


@Component({
  selector: 'app-activities-table',
  standalone: true,
  imports: [CommonModule,
    KENDO_GRID,
    KENDO_CHARTS,
    KENDO_INPUTS,
    KENDO_GRID_PDF_EXPORT,
    KENDO_GRID_EXCEL_EXPORT,],
  templateUrl: './activities-table.component.html',
  styleUrl: './activities-table.component.scss'
})
export class ActivitiesTableComponent {

  @ViewChild(DataBindingDirective)
  public dataBinding!: DataBindingDirective;
  public gridData: unknown[] = sampleActivities;
  public gridView!: unknown[];

  public mySelection: string[] = [];
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public onFilter(value: Event): void {
    const inputValue = value;

    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "full_name",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "job_title",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "budget",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "phone",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "address",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }




}
