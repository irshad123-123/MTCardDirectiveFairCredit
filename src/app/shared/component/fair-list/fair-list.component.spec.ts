import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairListComponent } from './fair-list.component';

describe('FairListComponent', () => {
  let component: FairListComponent;
  let fixture: ComponentFixture<FairListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
