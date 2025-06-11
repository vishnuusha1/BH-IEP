import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarContentContactsComponent } from './sidebar-content-contacts.component';

describe('SidebarContentContactsComponent', () => {
  let component: SidebarContentContactsComponent;
  let fixture: ComponentFixture<SidebarContentContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarContentContactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarContentContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
