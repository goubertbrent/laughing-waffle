import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandelingenComponent } from './wandelingen.component';

describe('WandelingenComponent', () => {
  let component: WandelingenComponent;
  let fixture: ComponentFixture<WandelingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandelingenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandelingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
