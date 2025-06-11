import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconModule } from '@progress/kendo-angular-icons';
import { SelectedJobsService } from '../../../../core/service/selectedJob.service';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule,IconModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {

  receivedName: string = '';
  showBanner = true;

  // Your dynamic data
  projects: string[] = [
    '1104096-NCIC III Ammonia/Urea Plant - STCC - Compression',
    '1104088-Ar Ratawi',
    '9000133-Leviathan Tex',
    '1709043-Other Plant'
  ];


  constructor(private selectedJobsService: SelectedJobsService) {

  }

  ngOnInit(): void {
    this.selectedJobsService.projectNames$.subscribe(name => {
      this.receivedName = name;
    });
  }

  get displayedProjectNames(): string {
    return this.receivedName;
  }

  requestCount = 3;

  onViewRequests(): void {
    console.log('Navigating to requests...');
  }

  dismiss(): void {
    this.showBanner = false;
  }
}
