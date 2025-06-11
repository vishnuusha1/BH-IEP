import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationLayoutComponent } from './operation-layout.component';

describe('OperationLayoutComponent', () => {
  let component: OperationLayoutComponent;
  let fixture: ComponentFixture<OperationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
