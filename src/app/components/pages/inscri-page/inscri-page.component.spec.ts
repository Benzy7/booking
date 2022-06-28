import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriPageComponent } from './inscri-page.component';

describe('InscriPageComponent', () => {
  let component: InscriPageComponent;
  let fixture: ComponentFixture<InscriPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
