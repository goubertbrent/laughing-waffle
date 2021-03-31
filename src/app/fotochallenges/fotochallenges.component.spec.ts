import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotochallengesComponent } from './fotochallenges.component';

describe('FotochallengesComponent', () => {
  let component: FotochallengesComponent;
  let fixture: ComponentFixture<FotochallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotochallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotochallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
