import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTagsComponent } from './summary-tags.component';

describe('SummaryTagsComponent', () => {
  let component: SummaryTagsComponent;
  let fixture: ComponentFixture<SummaryTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
