import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageirosComponent } from './passageiros.component';

describe('PassageirosComponent', () => {
  let component: PassageirosComponent;
  let fixture: ComponentFixture<PassageirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
