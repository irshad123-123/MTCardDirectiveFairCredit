import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairFormComponent } from './fair-form.component';

describe('FairFormComponent', () => {
  let component: FairFormComponent;
  let fixture: ComponentFixture<FairFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
