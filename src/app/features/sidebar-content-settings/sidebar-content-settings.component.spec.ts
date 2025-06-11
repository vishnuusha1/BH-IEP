import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarContentSettingsComponent } from './sidebar-content-settings.component';

describe('SidebarContentSettingsComponent', () => {
  let component: SidebarContentSettingsComponent;
  let fixture: ComponentFixture<SidebarContentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarContentSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarContentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
