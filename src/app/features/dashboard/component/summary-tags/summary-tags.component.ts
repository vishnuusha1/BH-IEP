import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ExpansionPanelModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '@progress/kendo-angular-buttons'; // Import for kendoButton


@Component({
  selector: 'app-summary-tags',
  standalone: true,
  imports: [CommonModule,ExpansionPanelModule,DropDownsModule,FormsModule,ScrollViewModule,ButtonsModule],
  templateUrl: './summary-tags.component.html',
  styleUrl: './summary-tags.component.scss'
})
export class SummaryTagsComponent {
public height = "150px";

// Data for "View As" dropdown
  public viewAsOptions: Array<{ text: string, value: string }> = [
    { text: 'Individual (2)', value: 'individual' },
    { text: 'Team (5)', value: 'team' },
    { text: 'Department (1)', value: 'department' }
  ];
  public selectedViewAs: { text: string, value: string } = this.viewAsOptions[0]; // Pre-select default

  // Data for "Functions" dropdown
  public functionsOptions: Array<{ text: string, value: string }> = [
    { text: 'ENG, TECH', value: 'eng_tech' },
    { text: 'MANUFACTURING', value: 'manufacturing' },
    { text: 'QA', value: 'qa' }
  ];
  public selectedFunctions: { text: string, value: string } = this.functionsOptions[0];

  // Data for "Document Type" dropdown
  public documentTypeOptions: Array<{ text: string, value: string }> = [
    { text: 'Internal, Step', value: 'internal_step' },
    { text: 'External, Final', value: 'external_final' }
  ];
  public selectedDocumentType: { text: string, value: string } = this.documentTypeOptions[0];

  // ... (define data for Activity Status, Activity Type, Finish By, Date Type)

  // Example method to handle selection change
  public onSelectionChange(value: any, dropdownName: string): void {
    console.log(`Selected ${dropdownName}:`, value);
    // You can perform further actions here based on the selected value
    // e.g., filter a Kendo Grid or other data.
  }

  public filterChips = [
    { text: 'Total Documents', count: 1321, isPrimary: true, filterKey: 'total' },
    { text: 'Backlogs', count: 16, isPrimary: false, filterKey: 'backlogs' },
    { text: 'Forecast', count: 199, isPrimary: false, filterKey: 'forecast' },
    { text: 'Not Acknowledged', count: 3, isPrimary: false, filterKey: 'notAcknowledged' },
    { text: 'Step', count: 5, isPrimary: false, filterKey: 'step' },
    { text: 'Rulestream', count: 3, isPrimary: false, filterKey: 'rulestream' }
  ];

  onChipClick(clickedChip: any): void {
    console.log(`Chip clicked: ${clickedChip.text}, applying filter for: ${clickedChip.filterKey}`);
    // Implement your filtering logic here based on chip.filterKey
    this.filterChips.forEach(chip => {
      chip.isPrimary = false;
    });

    // Set isPrimary to true for the clicked chip
    clickedChip.isPrimary = true;
  }


  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  weeks = [
  {
    title: 'Today',
    description: '1 out of 1 are not completed',
    class: 'today-card',
    showDots: true
  },
  {
    title: 'FW 6, 2025 (This Week)',
    description: '6 out of 15 are not completed',
    class: 'this-week-card',
    showDots: true
  },
  {
    title: 'FW 7, 2025 (Next Week)',
    description: '4 out of 8 are not completed',
    class: 'next-week-card',
    showDots: false
  },
  {
    title: 'FW 8, 2025',
    description: '4 out of 8 are not completed',
    class: 'future-week-card',
    showDots: false
  },
  {
    title: 'FW 9, 2025',
    description: '4 out of 8 are not completed',
    class: 'future-week-card',
    showDots: false
  }
];

 scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -250, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 250, behavior: 'smooth' });
  }
}
