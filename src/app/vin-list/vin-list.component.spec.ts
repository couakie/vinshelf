import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinListComponent } from './vin-list.component';

describe('VinListComponent', () => {
  let component: VinListComponent;
  let fixture: ComponentFixture<VinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
