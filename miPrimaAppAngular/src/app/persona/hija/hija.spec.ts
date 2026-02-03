import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hija } from './hija';

describe('Hija', () => {
  let component: Hija;
  let fixture: ComponentFixture<Hija>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hija]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hija);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
