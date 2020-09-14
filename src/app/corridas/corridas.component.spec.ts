import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridasComponent } from './corridas.component';

describe('CorridasComponent', () => {
  let component: CorridasComponent;
  let fixture: ComponentFixture<CorridasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorridasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
