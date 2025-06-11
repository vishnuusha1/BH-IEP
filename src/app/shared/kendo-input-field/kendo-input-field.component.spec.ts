import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoInputFieldComponent } from './kendo-input-field.component';

describe('KendoInputFieldComponent', () => {
  let component: KendoInputFieldComponent;
  let fixture: ComponentFixture<KendoInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KendoInputFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KendoInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
