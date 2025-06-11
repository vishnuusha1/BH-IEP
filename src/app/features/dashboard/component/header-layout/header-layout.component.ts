import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ArcGaugeModule, KENDO_GAUGES } from '@progress/kendo-angular-gauges';
import { KENDO_SLIDER } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [CommonModule, ArcGaugeModule, ButtonsModule,KENDO_SLIDER, KENDO_GAUGES, FormsModule, KENDO_LABELS],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss'
})
export class HeaderLayoutComponent {
value: number = 71;
}
