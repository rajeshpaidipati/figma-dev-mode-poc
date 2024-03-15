import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormTemplateComponent } from './custom-form-template.component';

describe('CustomFormTemplateComponent', () => {
  let component: CustomFormTemplateComponent;
  let fixture: ComponentFixture<CustomFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
